/*
 * Copyright ©2025 Ewsgit <https://ewsgit.uk> and YourDash <https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import { type Instance } from "./instance.js";
import { Application as ExpressApplication } from "express";

export enum YourDashSessionType {
    WEB,
    NEXTCLOUD_COMPATIBILITY,
}

class Authorization {
    instance: Instance;
    publicPaths: string[];

    constructor(instance: Instance) {
        this.instance = instance;
        this.publicPaths = [];

        return;
    }

    async __internal_authHook(app: ExpressApplication) {
        app.use(async (req, res, next) => {
            try {
                for (const pth of this.publicPaths) {
                    if ((req.path === pth)) {
                        return;
                    }
                }

                const authorization = req.cookies["authorization"];

                if (!authorization || authorization === "")
                    return res.status(401).send({ unauthorized: true });

                const [ username, sessionToken ] = authorization.split(" ");

                if (
                    !(await this.authorizeUser(username, `${username} ${sessionToken}`))
                ) {
                    return res.status(401).send({ unauthorized: true });
                }

                // @ts-ignore
                req.requestContext.set("username", username);
                // @ts-ignore
                req.requestContext.set("sessionToken", sessionToken);

                return next();
            } catch (err) {
                console.error("requestAuthError", err);
                return res.status(500).send({ unauthorized: true });
            }
        });
    }

    // check the sessionToken is valid for the user
    async authorizeUser(
        username: string,
        sessionToken: string
    ): Promise<boolean> {
        let sessionTokens = await this.instance.database`SELECT session_tokens FROM public.users WHERE username = ${username}`

        return (
            !!sessionTokens?.[0]?.session_tokens?.includes(sessionToken) || false
        );
    }

    // generate a sessionToken if the username and password are valid, else return null
    async authenticateUser(
        username: string,
        password: string,
        sessionType: YourDashSessionType
    ): Promise<string | null> {
        let postgresPasswordHash = (
            await this.instance.database`SELECT password_hash FROM public.users WHERE username = ${username};`
        )[0].password_hash;

        if (!(await Bun.password.verify(password, postgresPasswordHash))) {
            return null;
        }

        return this.__internal_generateSessionToken(username, sessionType);
    }

    async setUserPassword(username: string, password: string) {
        let passwordHash = await Bun.password.hash(password);

        await this.instance.database`UPDATE public.users SET password_hash = ${passwordHash} WHERE username = ${username};`

        this.instance.log.info(
            "authorization",
            `password was changed for user ${username}`
        );

        return true;
    }

    private __internal_generateSessionToken(
        username: string,
        sessionType: YourDashSessionType
    ) {
        let sessionToken = "";

        function generateStringOfLength(length: number) {
            let output = "";
            const characters =
                "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890-/+=_-~#@'!$%^&*(){}[]<>?¬`|\\.,:;";

            function getRandomIntInclusive(min: number, max: number) {
                const randomBuffer = new Uint32Array(1);

                crypto.getRandomValues(randomBuffer);

                let randomNumber = randomBuffer[0] / (0xffffffff + 1);

                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(randomNumber * (max - min + 1)) + min;
            }

            let array: number[] = [];

            while (array.length < length) {
                array.push(getRandomIntInclusive(0, characters.length - 1));
            }

            for (const num of array) {
                output += characters[num];
            }

            return output;
        }

        switch (sessionType) {
            case YourDashSessionType.WEB:
                sessionToken = `${username} WEB_${generateStringOfLength(128)}_YOURDASH_SESSION`;
                break;
            case YourDashSessionType.NEXTCLOUD_COMPATIBILITY:
                this.instance.log.warning(
                    "authorization",
                    "nextcloud session token generation is not yet implemented."
                );
                sessionToken = `${username} unimplemented session token generation!`;
                break;
        }

        this.instance.database`UPDATE users SET session_tokens = array_append(session_tokens, ${sessionToken}) WHERE username = ${username};`

        return sessionToken;
    }
}

export default Authorization;

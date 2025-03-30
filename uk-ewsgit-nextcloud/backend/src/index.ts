/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import { YourDashApplication } from "@yourdash/backend/src/applications.js";
import instance from "@yourdash/backend/src/main.js";
import { InstanceStatus } from "@yourdash/backend/src/types/instanceStatus.js";
import User, { getUser } from "@yourdash/backend/src/user.js";
import * as Bun from "bun";
import path from "path";
import { z } from "zod";
import { randomUUID } from "node:crypto";
import { FastifyRequest } from "fastify";

export const MIMICKED_NEXTCLOUD_VERSION = {
  major: 28,
  minor: 0,
  micro: 3,
  string: "28.0.3",
  edition: "YourDash Cross-Compatability",
  extendedSupport: false,
};

export default class Application extends YourDashApplication {
  constructor() {
    super({
            version: {
              major: 1,
              minor: 0,
            },
            configVersion: 1,
            credits: {
              authors: [ { name: "Ewsgit", site: "https://ewsgit.uk" } ],
            },
            frontend: true,
            displayName: "Nextcloud",
            description: "The YourDash Nextcloud integration.",
            id: "uk-ewsgit-nextcloud",
          });

    (async () => {
    try {
      await instance.database.query(`CREATE TABLE uk_ewsgit_nextcloud_sessions
                               (
                                   username text,
                                   session_tokens text[]
                               );`)

      await instance.database.query(`ALTER TABLE uk_ewsgit_nextcloud_sessions
          ADD CONSTRAINT username UNIQUE (username)
      ;`)
    } catch (e) {
      instance.log.info("uk-ewsgit-nextcloud", "database already exists")
    }
    })();

    return this;
  }

  public onLoad(): this {
    instance.request.get(
        "/uk-ewsgit-nextcloud/", { schema: { response: { 200: z.undefined() } } }, async (req, res) => {
          res.status(200)
          return {
            hello: "Welcome to YourDash's Nextcloud Application support!"
          }
        })

    instance.request.get(
        "/uk-ewsgit-nextcloud/status.php",
        {
          schema: {
            response: {
              200: z.object({
                              installed: z.boolean(),
                              maintenance: z.boolean(),
                              needsDbUpgrade: z.boolean(),
                              version: z.string(),
                              versionstring: z.string(),
                              edition: z.string(),
                              productname: z.string(),
                              extendedSupport: z.boolean(),
                            }),
            },
          },
          config: { isPublic: true },
        },
        async (req, res) => {
          res.header("Access-Control-Allow-Origin", "*");

          const query = (await instance.database.query(
              "SELECT display_name FROM public.configuration ORDER BY config_version DESC LIMIT 1")).rows[0];

          switch (req.headers["Content-Type"]) {
            case "application/json":
            default:
              return {
                installed: true,
                maintenance: instance.getStatus() === InstanceStatus.MAINTENANCE,
                needsDbUpgrade: false,
                version: "28.0.0.11",
                versionstring: MIMICKED_NEXTCLOUD_VERSION.string,
                edition: MIMICKED_NEXTCLOUD_VERSION.edition,
                productname: query.display_name || "YourDash Cross-Compatability",
                extendedSupport: MIMICKED_NEXTCLOUD_VERSION.extendedSupport,
              };
          }
        },
    );

    instance.request.get(
        "/uk-ewsgit-nextcloud/ocs/v2.php/cloud/capabilities",
        {
          schema: {
            response: {
              200: z.object({
                              ocs: z.object({
                                              meta: z.object({
                                                               status: z.string(),
                                                               statuscode: z.number(),
                                                               message: z.string(),
                                                             }),
                                              data: z.object({
                                                               version: z.object({
                                                                                   major: z.number(),
                                                                                   minor: z.number(),
                                                                                   micro: z.number(),
                                                                                   string: z.string(),
                                                                                   edition: z.string(),
                                                                                   extendedSupport: z.boolean(),
                                                                                 }),
                                                               capabilities: z.object({
                                                                                        bruteforce: z.object({
                                                                                                               delay: z.number(),
                                                                                                               "allow-listed": z.boolean(),
                                                                                                             }),
                                                                                        theming: z.object({
                                                                                                            name: z.string(),
                                                                                                            url: z.string(),
                                                                                                            slogan: z.string(),
                                                                                                            color: z.string(),
                                                                                                            "color-text": z.string(),
                                                                                                            "color-element": z.string(),
                                                                                                            "color-element-bright": z.string(),
                                                                                                            "color-element-dark": z.string(),
                                                                                                            logo: z.string(),
                                                                                                            background: z.string(),
                                                                                                            "background-plain": z.boolean(),
                                                                                                            "background-default": z.boolean(),
                                                                                                            logoheader: z.string(),
                                                                                                            favicon: z.string(),
                                                                                                          }),
                                                                                      }),
                                                             }),
                                            }),
                            }),
            },
          },
          config: { isPublic: true },
        },
        async (req, res) => {
          const query = (
              await instance.database.query(
                  "SELECT display_name, external_url, description FROM public.configuration ORDER BY config_version DESC LIMIT 1",
              )
          ).rows[0];

          switch (req.headers["Content-Type"]) {
            case "application/json":
            default:
              return {
                ocs: {
                  meta: {
                    status: "ok",
                    statuscode: 200,
                    message: "OK",
                  },
                  data: {
                    version: {
                      major: MIMICKED_NEXTCLOUD_VERSION.major,
                      minor: MIMICKED_NEXTCLOUD_VERSION.minor,
                      micro: MIMICKED_NEXTCLOUD_VERSION.micro,
                      string: MIMICKED_NEXTCLOUD_VERSION.string,
                      edition: MIMICKED_NEXTCLOUD_VERSION.edition,
                      extendedSupport: MIMICKED_NEXTCLOUD_VERSION.extendedSupport,
                    },
                    capabilities: {
                      bruteforce: {
                        delay: 200, // arbitrary value in milisecconds
                        "allow-listed": false,
                      },
                      theming: {
                        name: query.display_name || "YourDash",
                        url: query.external_url || `${req.protocol}://${req.hostname || "localhost:3563"}`,
                        slogan: query.description || "[YourDash Instance Description (Nextcloud slogan)]",
                        color: "#00679e",
                        "color-text": "#ffffff",
                        "color-element": "#00679e",
                        "color-element-bright": "#00679e",
                        "color-element-dark": "#00679e",
                        logo: `${req.protocol}://${req.hostname || "localhost:3563"}/index.php/apps/theming/image/logo?useSvg=1&v=2`,
                        background: `${req.protocol}://${req.hostname || "localhost:3563"}/index.php/apps/theming/image/background?v=2`,
                        "background-plain": false,
                        "background-default": false,
                        logoheader: `${req.protocol}://${req.hostname || "localhost:3563"}/index.php/apps/theming/image/logo?useSvg=1&v=2`,
                        favicon: `${req.protocol}://${req.hostname || "localhost:3563"}/index.php/apps/theming/image/logo?useSvg=1&v=2`,
                      },
                    },
                  },
                },
              };
          }
        },
    );

    instance.request.get(
        "/uk-ewsgit-nextcloud/ocs/v1.php/cloud/capabilities",
        {
          schema: {
            response: {
              200: z.object({
                              ocs: z.object({
                                              meta: z.object({
                                                               status: z.string(),
                                                               statuscode: z.number(),
                                                               message: z.string(),
                                                             }),
                                              data: z.object({
                                                               version: z.object({
                                                                                   major: z.number(),
                                                                                   minor: z.number(),
                                                                                   micro: z.number(),
                                                                                   string: z.string(),
                                                                                   edition: z.string(),
                                                                                   extendedSupport: z.boolean(),
                                                                                 }),
                                                               capabilities: z.object({
                                                                                        bruteforce: z.object({
                                                                                                               delay: z.number(),
                                                                                                               "allow-listed": z.boolean(),
                                                                                                             }),
                                                                                        theming: z.object({
                                                                                                            name: z.string(),
                                                                                                            url: z.string(),
                                                                                                            slogan: z.string(),
                                                                                                            color: z.string(),
                                                                                                            "color-text": z.string(),
                                                                                                            "color-element": z.string(),
                                                                                                            "color-element-bright": z.string(),
                                                                                                            "color-element-dark": z.string(),
                                                                                                            logo: z.string(),
                                                                                                            background: z.string(),
                                                                                                            "background-plain": z.boolean(),
                                                                                                            "background-default": z.boolean(),
                                                                                                            logoheader: z.string(),
                                                                                                            favicon: z.string(),
                                                                                                          }),
                                                                                      }),
                                                             }),
                                            }),
                            }),
            },
          },
          config: { isPublic: true },
        },
        async (req, res) => {
          const query = (
              await instance.database.query(
                  "SELECT display_name, external_url, description FROM configuration ORDER BY config_version DESC LIMIT 1",
              )
          ).rows[0];

          switch (req.headers["Content-Type"]) {
            case "application/json":
            default:
              return {
                ocs: {
                  meta: {
                    status: "ok",
                    statuscode: 200,
                    message: "OK",
                  },
                  data: {
                    version: {
                      major: MIMICKED_NEXTCLOUD_VERSION.major,
                      minor: MIMICKED_NEXTCLOUD_VERSION.minor,
                      micro: MIMICKED_NEXTCLOUD_VERSION.micro,
                      string: MIMICKED_NEXTCLOUD_VERSION.string,
                      edition: MIMICKED_NEXTCLOUD_VERSION.edition,
                      extendedSupport: MIMICKED_NEXTCLOUD_VERSION.extendedSupport,
                    },
                    capabilities: {
                      bruteforce: {
                        delay: 200, // arbitrary value in milisecconds
                        "allow-listed": false,
                      },
                      theming: {
                        name: query.display_name || "YourDash",
                        url: query.external_url || "http://localhost:3563",
                        slogan: query.description || "[YourDash Instance Description (Nextcloud slogan)]",
                        color: "#00679e",
                        "color-text": "#ffffff",
                        "color-element": "#00679e",
                        "color-element-bright": "#00679e",
                        "color-element-dark": "#00679e",
                        logo: `http://${req.hostname || "localhost:3563"}/index.php/apps/theming/image/logo?useSvg=1&v=2`,
                        background: `http://${req.hostname || "localhost:3563"}/index.php/apps/theming/image/background?v=2`,
                        "background-plain": false,
                        "background-default": false,
                        logoheader: `http://${req.hostname || "localhost:3563"}/index.php/apps/theming/image/logo?useSvg=1&v=2`,
                        favicon: `http://${req.hostname || "localhost:3563"}/index.php/apps/theming/image/logo?useSvg=1&v=2`,
                      },
                    },
                  },
                },
              };
          }
        },
    );

    // request for a session at /index.php/login/v2
    // create an authFlowSession
    // poll token is generated and used as the id for an authFlowSession
    // user must log in at a url to the gui
    // the application begins to poll /index.php/login/v2/poll
    // if the login was successful, generate a sessionToken and add it to the PostgresSQL database
    // remove the authFlowSession

    let authFlowSessions: { [pollToken: string]: { pollToken: string; sessionToken?: string; username?: string } } = {};

    instance.request.post(
        "/uk-ewsgit-nextcloud/index.php/login/v2",
        {
          schema: {
            response: {
              200: z.object({ poll: z.object({ token: z.string(), endpoint: z.string() }), login: z.string() })
            }
          },
          config: { isPublic: true },
        },
        async (req, res) => {
          const pollToken = crypto.randomUUID();

          authFlowSessions[pollToken] = { pollToken: pollToken, username: "" };

          // delete after 20 minutes
          setTimeout(() => {
            if (authFlowSessions[pollToken]) {
              delete authFlowSessions[pollToken]
            }
          }, 20 * 60 * 1000)

          return {
            poll: {
              token: pollToken,
              endpoint: `${req.protocol}://${req.hostname}:3563/uk-ewsgit-nextcloud/index.php/login/v2/poll`,
            },
            // TODO: replace localhost with the instance's web url
            login: `http://localhost:5173/app/a/uk-ewsgit-nextcloud/flow/v2/${pollToken}`,
          };
        },
    );

    instance.request.post(
        "/uk-ewsgit-nextcloud/index.php/login/v2/poll",
        {
          schema: {
            response: { 200: z.object({ server: z.string(), loginName: z.string(), appPassword: z.string() }) },
            body: z.object({ token: z.string() }),
          },
          config: { isPublic: true },
        },
        async (req, res) => {
          const authSessionPollToken = (req.body as { token: string }).token;
          const authSession = authFlowSessions[authSessionPollToken];

          if (!authSession) {
            console.log("polled and found no session");
            return res.status(404).send();
          }

          if (!authSession.sessionToken) {
            console.log("polled and session was found but was missing a username?");
            return res.status(404).send();
          }

          if (!authSession.sessionToken) {
            console.log("polled and session was found but was not yet authenticated.");
            return res.status(404).send();
          }

          delete authFlowSessions[authSessionPollToken];

          return {
            server: `${req.protocol}://${req.hostname}:3563/uk-ewsgit-nextcloud`,
            loginName: authSession.username,
            appPassword: authSession.sessionToken,
          };
        },
    );

    instance.request.post(
        "/uk-ewsgit-nextcloud/login/nextcloud/flow/v2/authenticate",
        {
          schema: {
            body: z.object({
                             username: z.string(),
                             password: z.string(),
                             pollToken: z.string(),
                           }),
            response: {
              200: z.object({
                              error: z.string(),
                            }).or(
                  z.object({
                             success: z.boolean(),
                           }),
              ),
            },
          },
          config: { isPublic: true },
        },
        async (req, res) => {
          if (!req.body) {
            return res.status(400).send({ error: "Invalid or missing request body" });
          }

          const username = (req.body as { username: string }).username;
          const password = (req.body as { password: string }).password;
          const pollToken = (req.body as { pollToken: string }).pollToken;

          const authSession = authFlowSessions[pollToken];

          if (!authSession) {
            return res.send({ error: "Invalid auth session" });
          }

          if (!username || username === "") {
            return res.send({ error: "Missing username" });
          }

          if (!password || password === "") {
            return res.send({ error: "Missing password" });
          }

          let postgresPasswordHash = (await instance.database.query(
              "SELECT password_hash FROM users WHERE username = $1;", [ username ])).rows[0].password_hash;

          if (!(await Bun.password.verify(password, postgresPasswordHash))) {
            return res.status(401).send();
          }

          authSession.username = username
          authSession.sessionToken = randomUUID()

          await instance.database.query(
              `INSERT INTO public.uk_ewsgit_nextcloud_sessions (username)
               VALUES ($1)
               ON CONFLICT (username) DO NOTHING;`,
              [ authSession.username ]
          )

          await instance.database.query(
              `UPDATE public.uk_ewsgit_nextcloud_sessions
               SET session_tokens = array_append(session_tokens, $1)
               WHERE username = $2;`,
              [ authSession.sessionToken, authSession.username ],
          );

          return { success: true };
        },
    );

    async function getUserForRequest(req: FastifyRequest): Promise<User | void> {
      if (!req.headers.authorization) {
        console.log("We should not get here!!! getUserForRequest() // nextcloud");
        // @ts-ignore
        return;
      }

      // if we are using api v2 then the sessionToken is just the user's password
      function parseAuthorization(sessionToken: string): { username: string; sessionToken: string } {
        const tokenString = sessionToken.split("Basic ")[1];
        const tokenParsed = Buffer.from(tokenString, "base64").toString("utf-8");

        const parsedTokenValues = tokenParsed.split(":");

        const username = parsedTokenValues[0];
        const userPassword = parsedTokenValues[1];
        return { username: username, sessionToken: userPassword };
      }

      const reqAuth = parseAuthorization(req.headers.authorization);

      const dbQuery = await instance.database.query(
          "SELECT session_tokens FROM public.uk_ewsgit_nextcloud_sessions WHERE username = $1", [
            reqAuth.username,
          ]);

      if (!dbQuery) {
        console.log("Invalid Session Token!");
        return;
      }

      console.log({ rows: dbQuery.rows })

      if (!dbQuery.rows?.[0]) {
        console.log("Invalid Session!")
        return;
      }

      if (!dbQuery.rows[0].session_tokens) {
        console.log("Invalid Session, no session tokens found!");
        return;
      }

      return await getUser(dbQuery.rows[0].username)
    }

    instance.request.get(
        "/uk-ewsgit-nextcloud/ocs/v1.php/cloud/user",
        {
          schema: {
            response: {
              200: z.object({
                              ocs: z.object({
                                              meta: z.object({
                                                               status: z.string(),
                                                               statuscode: z.number(),
                                                               message: z.string(),
                                                               totalitems: z.number(),
                                                               itemsperpage: z.number(),
                                                             }),
                                              data: z.object({
                                                               enabled: z.boolean(),
                                                               storageLocation: z.string(),
                                                               id: z.string(),
                                                               lastLogin: z.number(),
                                                               backend: z.string(),
                                                               subadmin: z.unknown().array(),
                                                               quota: z.object({
                                                                                 free: z.number(),
                                                                                 used: z.number(),
                                                                                 total: z.number(),
                                                                                 relative: z.number(),
                                                                                 quota: z.number(),
                                                                               }),
                                                               manager: z.string(),
                                                               avatarScope: z.string(),
                                                               email: z.null(),
                                                               emailScope: z.string(),
                                                               aditional_mail: z.string().array(),
                                                               aditional_mailScope: z.string().array(),
                                                               displayname: z.string(),
                                                               "display-name": z.string(),
                                                               displaynameScope: z.string(),
                                                               phone: z.string(),
                                                               phoneScope: z.string(),
                                                               address: z.string(),
                                                               addressScope: z.string(),
                                                               website: z.string(),
                                                               websiteScope: z.string(),
                                                               twitter: z.string(),
                                                               twitterScope: z.string(),
                                                               fediverse: z.string(),
                                                               fediverseScope: z.string(),
                                                               organisation: z.string(),
                                                               organisationScope: z.string(),
                                                               role: z.string(),
                                                               roleScope: z.string(),
                                                               headline: z.string(),
                                                               headlineScope: z.string(),
                                                               biography: z.string(),
                                                               biographyScope: z.string(),
                                                               profile_enabled: z.string(),
                                                               profile_enabledScope: z.string(),
                                                               groups: z.string().array(),
                                                               language: z.string(),
                                                               locale: z.string(),
                                                               notify_email: z.string().or(z.null()),
                                                               backendCapabilities: z.object({
                                                                                               setDisplayName: z.boolean(),
                                                                                               setPassword: z.boolean(),
                                                                                             }),
                                                             }),
                                            }),
                            }),
            },
          },
          config: { isPublic: true },
        },
        async (req, res) => {
          const user = await getUserForRequest(req);

          if (!user) {
            res.status(500)
            return { error: true }
          }

          const userFullName = (await user.getFullName()) || "Unknown User";

          return {
            ocs: {
              meta: {
                status: "ok",
                statuscode: 100,
                message: "OK",
                totalitems: 0,
                itemsperpage: 0,
              },
              data: {
                enabled: true,
                storageLocation: path.join(instance.filesystem.commonPaths.HomeDirectory(user.username)),
                id: user.username,
                lastLogin: Date.now(),
                backend: "Database",
                subadmin: [],
                quota: {
                  free: 100,
                  used: 10,
                  total: 1000,
                  relative: 0.03,
                  quota: -3,
                },
                manager: "",
                avatarScope: "v2-federated",
                email: null,
                emailScope: "v2-federated",
                aditional_mail: [],
                aditional_mailScope: [],
                displayname: userFullName,
                "display-name": userFullName,
                displaynameScope: "v2-federated",
                phone: "",
                phoneScope: "v2-local",
                address: "",
                addressScope: "v2-local",
                website: "",
                websiteScope: "v2-local",
                twitter: "",
                twitterScope: "v2-local",
                fediverse: "",
                fediverseScope: "v2-local",
                organisation: "",
                organisationScope: "v2-local",
                role: "",
                roleScope: "v2-local",
                headline: "",
                headlineScope: "v2-local",
                biography: "",
                biographyScope: "v2-local",
                profile_enabled: "1",
                profile_enabledScope: "v2-local",
                groups: [ "admin" ],
                language: "en_GB",
                locale: "",
                notify_email: null,
                backendCapabilities: {
                  setDisplayName: true,
                  setPassword: true,
                },
              },
            },
          };
        },
    );

    instance.request.get(
        "/uk-ewsgit-nextcloud/remote.php/dav/avatars/:username/*",
        { schema: { response: { 200: z.unknown() } }, config: { isPublic: true } },
        async (req, res) => {
          const user = new User((req.params as unknown as { username: string }).username);
          if (await user.doesExist()) {
            res.status(200);
            return instance.requestManager.sendFile(
                res,
                path.join(instance.filesystem.commonPaths.UserSystemDirectory(user.username), "avatar128.webp"),
                "image/webp",
            );
          } else {
            return res.status(404);
          }
        },
    );

    /*   // handle nextcloud compatability authentication (remember the Bearer)
     core.request.usePath("/remote.php/", async (req, res, next) => {
     return res.contentType("http/xml").send(`<?xml version="1.0" encoding="utf-8"?>
     <d:error xmlns:d="DAV:" xmlns:s="http://sabredav.org/ns">
     <s:exception>Internal Server Error</s:exception>
     <s:message>The server was unable to complete your request.
     If this happens again, please send the technical details below to the server administrator.
     More details can be found in the server log.
     </s:message>
     <s:technical-details>
     <s:remote-address>::1</s:remote-address>
     <s:request-id>ibCxTsPl4KN7sufuReK6</s:request-id>
     </s:technical-details>
     </d:error>`);
     }); */

    // https://docs.nextcloud.com/server/latest/developer_manual/client_apis/WebDAV/basic.html
    instance.request.propfind(
        "/uk-ewsgit-nextcloud/remote.php/dav/files/:username/*", {
          schema: {
            response: { 200: z.object({ error: z.boolean() }) },
            params: z.object({
                               "*": z.string().describe("The resource's path"),
                               "username": z.string().describe("The owner of the resource")
                             })
          },
          config: { isPublic: true },
        },
        async (req, res) => {
          const params = req.params as { username: string; "*": string };

          console.log({
                        username: params.username,
                        params: Object.values(params).join("/"),
                        path: params["*"]
                      });

          console.log(JSON.stringify(req.body));

          if (!(req.body as { "d:propfind"?: object })["d:propfind"]) {
            console.log("no d:propfind found!", req.body);
          }

          if (!(req.body as {
            "d:propfind"?: { "d:prop"?: object[] }
          })["d:propfind"]?.["d:prop"]) {
            console.log("no d:prop found! sending defaults", req.body);
          }

          const props: object[] = (req.body as {
            "d:propfind": { "d:prop": object[] }
          })["d:propfind"]["d:prop"];

          const filePath = params["*"] === undefined ? "/" : params["*"];

          let response: string[] = [];

          Object.keys(props).forEach((prop: string) => {
            switch (prop) {
              case "d:getlastmodified":
                response.push(
                    `<d:getlastmodified>FORMATTED LAST MODIFIED DATE</d:getlastmodified>`);
            }
          });

          return res.type("xml").status(207).send(`<?xml version="1.0"?>
<d:multistatus xmlns:d="DAV:" xmlns:s="http://sabredav.org/ns" xmlns:oc="http://owncloud.org/ns" xmlns:nc="http://nextcloud.org/ns">
<d:response>
<d:href>${req.url}</d:href>
<d:propstat>
${response.map((res) => {
            return `<d:prop>${res}</d:prop>`;
          })}
<d:status>HTTP/1.1 200 OK</d:status>
</d:propstat>
</d:response>
</d:multistatus>`);
          //
          //     if (params["*"] === "/") {
          //       return res.contentType("xml").send(`<?xml version="1.0" encoding="utf-8"?>
          //       <d:error xmlns:d="DAV:" xmlns:s="http://sabredav.org/ns">
          //         <s:exception>Internal Server Error</s:exception>
          //         <s:message>The server was unable to complete your request.
          // If this happens again, please send the technical details below to the server administrator.
          // More details can be found in the server log.
          //         </s:message>
          //         <s:technical-details>
          //           <s:remote-address>::1</s:remote-address>
          //           <s:request-id>ibCxTsPl4KN7sufuReK6</s:request-id>
          //         </s:technical-details>
          //       </d:error>`);
          //     }
          //
          //     if (params["*"] === undefined) {
          //       return res.contentType("http/xml").send(`<?xml version="1.0" encoding="utf-8"?>
          // <d:multistatus xmlns:d="DAV:" xmlns:s="http://sabredav.org/ns" xmlns:oc="http://owncloud.org/ns" xmlns:nc="http://nextcloud.org/ns">
          //     <d:response>
          //         <d:href>${req.path}</d:href>
          //         <d:propstat>
          //             <d:prop>
          //                 <oc:size>10000</oc:size>
          //             </d:prop>
          //             <d:status>HTTP/1.1 200 OK</d:status>
          //         </d:propstat>
          //     </d:response>
          // </d:multistatus>
          // `);
          //     }
        }
    );

    instance.request.get(
        "/uk-ewsgit-nextcloud/remote.php/dav/avatars/:username/:size.png",
        { schema: { response: { 200: z.unknown() } }, config: { isPublic: true } },
        async (req, res) => {
          const user = new User((req.params as unknown as { username: string }).username);
          if (await user.doesExist()) {
            res.status(200);
            return instance.requestManager.sendFile(
                res,
                path.join(instance.filesystem.commonPaths.UserSystemDirectory(user.username), "avatar64.webp"),
                "image/webp",
            );
          } else {
            return res.status(404);
          }
        },
    );

    return super.onLoad();
  }
}

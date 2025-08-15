/*
 * Copyright ©2025 Ewsgit <https://ewsgit.uk> and YourDash <https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import express, { Application as ExpressApplication } from "express";
import { Instance } from "./instance.js";
import path from "path";
import cookies from "cookies";
import cors from "cors";
import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { createContext } from "./trpcContext.js";
import chalk from "chalk";
import { InstanceStatus } from "./types/instanceStatus.js";
import { YourDashSessionType } from "./authorization.js";
import User from "./userManager/user.js";
import { resizeImage } from "./image.js";
import { promises as fs } from "fs";
import { YourDashApplication } from "./applications.js";

enum LoginLayout {
    SIDEBAR,
    MODAL,
    CARDS,
}

class RequestManager {
    app: ExpressApplication;
    tRPC;
    tRPCRouter;
    private instance: Instance;

    constructor(instance: Instance) {
        this.instance = instance;

        this.app = express();

        this.tRPC = initTRPC.create();

        this.tRPCRouter = this.tRPC.router({
                                               sample: this.tRPC.procedure.query(async (options) => {
                                                   return {
                                                       foo: "bar"
                                                   };
                                               })
                                           });

        return this;
    }

    async __internal_startup() {
        this.instance.log.info("request_manager", "Starting RequestManager...");
        try {
            await this.instance.database`CREATE TABLE IF NOT EXISTS public.request_manager_log
                                         (
                                             request_id        serial primary key,
                                             request_timestamp bigint NOT NULL,
                                             request_method    text   NOT NULL,
                                             request_path      text   NOT NULL,
                                             request_body      text
                                         )`;
        } catch (err) {
            console.error(err);
        }

        this.app.use(cors({
                              methods: "*",
                              origin: "http://localhost:5173",
                              credentials: true
                          }));

        this.app.use(cookies.express([ this.instance.configurationManager.config.cookieSecret ]));

        this.app.use(
            "/trpc",
            trpcExpress.createExpressMiddleware({
                                                    router: this.tRPCRouter,
                                                    createContext,
                                                    onError({ path, error }) {
                                                        console.error(
                                                            `Error in tRPC handler on path '${path}':`, error);
                                                    }
                                                })
        );

        this.app.use((req, res, next) => {
                         req.on("finish", async (req, res) => {
                             if (res.statusCode.toString()[0] === "4") {
                                 switch (req.method.toUpperCase()) {
                                     case "GET":
                                         if (req.url.startsWith("/core/auth-img")) {
                                             return;
                                         }
                                         if (req.url.startsWith("/core/auth-video")) {
                                             return;
                                         }

                                         this.instance.log.info(
                                             "response",
                                             `${chalk.bgBlack(chalk.green(" GET "))} ${chalk.bgBlack(
                                                 chalk.red(` ${res.statusCode} `))} ${chalk.bold(
                                                 req.url)} ${this.instance.configurationManager.config.logQueryParameters ? JSON.stringify(
                                                 req.query) !== "{}" && JSON.stringify(req.query) : ""}`
                                         );
                                         break;
                                     case "POST":
                                         this.instance.log.info(
                                             "response",
                                             `${chalk.bgBlack(chalk.blue(" POS "))} ${chalk.bgBlack(
                                                 chalk.red(` ${res.statusCode} `))} ${chalk.bold(
                                                 req.url)} ${this.instance.configurationManager.config.logQueryParameters ? JSON.stringify(
                                                 req.query) !== "{}" && JSON.stringify(req.query) : ""}`
                                         );
                                         break;
                                     case "DELETE":
                                         this.instance.log.info(
                                             "response",
                                             `${chalk.bgBlack(chalk.red(" DEL "))} ${chalk.bgBlack(
                                                 chalk.red(` ${res.statusCode} `))} ${chalk.bold(
                                                 req.url)} ${this.instance.configurationManager.config.logQueryParameters ? JSON.stringify(
                                                 req.query) !== "{}" && JSON.stringify(req.query) : ""}`
                                         );
                                         break;
                                     case "OPTIONS":
                                         if (this.instance.configurationManager.config.logOptionsRequests) {
                                             this.instance.log.info(
                                                 "response",
                                                 `${chalk.bgBlack(chalk.cyan(" OPT "))} ${chalk.bgBlack(
                                                     chalk.red(` ${res.statusCode} `))} ${chalk.bold(
                                                     req.url)} ${this.instance.configurationManager.config.logQueryParameters ? JSON.stringify(
                                                     req.query) !== "{}" && JSON.stringify(req.query) : ""}`
                                             );
                                         }
                                         break;
                                     case "PROPFIND":
                                         this.instance.log.info(
                                             "response",
                                             `${chalk.bgBlack(chalk.cyan(" PFI "))} ${chalk.bgBlack(
                                                 chalk.red(` ${res.statusCode} `))} ${chalk.bold(
                                                 req.url)} ${this.instance.configurationManager.config.logQueryParameters ? JSON.stringify(
                                                 req.query) !== "{}" && JSON.stringify(req.query) : ""}`
                                         );
                                         break;
                                     case "PROPPATCH":
                                         this.instance.log.info(
                                             "response",
                                             `${chalk.bgCyan(chalk.cyan(" PPA "))} ${chalk.bgBlack(
                                                 chalk.red(` ${res.statusCode} `))} ${chalk.bgBlack(
                                                 chalk.red(` ${res.statusCode} `))} ${chalk.bold(
                                                 req.url)} ${this.instance.configurationManager.config.logQueryParameters ? JSON.stringify(
                                                 req.query) !== "{}" && JSON.stringify(req.query) : ""}`
                                         );
                                         break;
                                     default:
                                 }
                             }
                             if (res.statusCode.toString()[0] === "5") {
                                 switch (req.method.toUpperCase()) {
                                     case "GET":
                                         if (req.url.startsWith("/core/auth-img")) {
                                             return;
                                         }
                                         if (req.url.startsWith("/core/auth-video")) {
                                             return;
                                         }

                                         this.instance.log.info(
                                             "response",
                                             `${chalk.bgBlack(chalk.green(" GET "))} ${chalk.bgBlack(
                                                 chalk.red(` ${res.statusCode} `))} ${chalk.bold(
                                                 req.url)} ${this.instance.configurationManager.config.logQueryParameters ? JSON.stringify(
                                                 req.query) !== "{}" && JSON.stringify(req.query) : ""}`
                                         );
                                         break;
                                     case "POST":
                                         this.instance.log.info(
                                             "response",
                                             `${chalk.bgBlack(chalk.blue(" POS "))} ${chalk.bgBlack(
                                                 chalk.red(` ${res.statusCode} `))} ${chalk.bold(
                                                 req.url)} ${this.instance.configurationManager.config.logQueryParameters ? JSON.stringify(
                                                 req.query) !== "{}" && JSON.stringify(req.query) : ""}`
                                         );
                                         break;
                                     case "DELETE":
                                         this.instance.log.info(
                                             "response",
                                             `${chalk.bgBlack(chalk.red(" DEL "))} ${chalk.bgBlack(
                                                 chalk.red(` ${res.statusCode} `))} ${chalk.bold(
                                                 req.url)} ${this.instance.configurationManager.config.logQueryParameters ? JSON.stringify(
                                                 req.query) !== "{}" && JSON.stringify(req.query) : ""}`
                                         );
                                         break;
                                     case "OPTIONS":
                                         if (this.instance.configurationManager.config.logOptionsRequests) {
                                             this.instance.log.info(
                                                 "response",
                                                 `${chalk.bgBlack(chalk.cyan(" OPT "))} ${chalk.bgBlack(
                                                     chalk.red(` ${res.statusCode} `))} ${chalk.bold(
                                                     req.url)} ${this.instance.configurationManager.config.logQueryParameters ? JSON.stringify(
                                                     req.query) !== "{}" && JSON.stringify(req.query) : ""}`
                                             );
                                         }
                                         break;
                                     case "PROPFIND":
                                         this.instance.log.info(
                                             "response",
                                             `${chalk.bgBlack(chalk.cyan(" PFI "))} ${chalk.bgBlack(
                                                 chalk.red(` ${res.statusCode} `))} ${chalk.bold(
                                                 req.url)} ${this.instance.configurationManager.config.logQueryParameters ? JSON.stringify(
                                                 req.query) !== "{}" && JSON.stringify(req.query) : ""}`
                                         );
                                         break;
                                     case "PROPPATCH":
                                         this.instance.log.info(
                                             "response",
                                             `${chalk.bgCyan(chalk.cyan(" PPA "))} ${chalk.bgBlack(
                                                 chalk.red(` ${res.statusCode} `))} ${chalk.bold(
                                                 req.url)} ${this.instance.configurationManager.config.logQueryParameters ? JSON.stringify(
                                                 req.query) !== "{}" && JSON.stringify(req.query) : ""}`
                                         );
                                         break;
                                     default:
                                 }
                             }
                         });

                         return next();
                     }
        );

        this.app.use(async (req, res, next) => {
            let queryResult = await this.instance.database`INSERT INTO public.request_manager_log (request_timestamp, request_method, request_path, request_body)
                                                           VALUES (${Date.now()}, ${req.method}, ${req.url},
                                                                   ${req.body})
                                                           RETURNING request_id;`;

            res.header("request-id", JSON.stringify(queryResult[0].request_id));

            switch (req.method.toUpperCase()) {
                case "GET":
                    if (req.url.startsWith("/core/auth-img")) {
                        return;
                    }
                    if (req.url.startsWith("/core/auth-video")) {
                        return;
                    }

                    this.instance.log.info(
                        "request",
                        `${chalk.bgBlack(chalk.green(" GET "))} ${chalk.bold(
                            req.url)} ${this.instance.configurationManager.config.logQueryParameters ? JSON.stringify(
                            req.query) !== "{}" && JSON.stringify(req.query) : ""}`
                    );
                    break;
                case "POST":
                    this.instance.log.info(
                        "request",
                        `${chalk.bgBlack(chalk.blue(" POS "))} ${chalk.bold(
                            req.url)} ${this.instance.configurationManager.config.logQueryParameters ? JSON.stringify(
                            req.query) !== "{}" && JSON.stringify(req.query) : ""}`
                    );
                    break;
                case "DELETE":
                    this.instance.log.info(
                        "request",
                        `${chalk.bgBlack(chalk.red(" DEL "))} ${chalk.bold(
                            req.url)} ${this.instance.configurationManager.config.logQueryParameters ? JSON.stringify(
                            req.query) !== "{}" && JSON.stringify(req.query) : ""}`
                    );
                    break;
                case "OPTIONS":
                    if (this.instance.configurationManager.config.logOptionsRequests) {
                        this.instance.log.info(
                            "request",
                            `${chalk.bgBlack(chalk.cyan(" OPT "))} ${chalk.bold(
                                req.url)} ${this.instance.configurationManager.config.logQueryParameters ? JSON.stringify(
                                req.query) !== "{}" && JSON.stringify(req.query) : ""}`
                        );
                    }
                    break;
                case "PROPFIND":
                    this.instance.log.info(
                        "request",
                        `${chalk.bgBlack(chalk.cyan(" PFI "))} ${chalk.bold(
                            req.url)} ${this.instance.configurationManager.config.logQueryParameters ? JSON.stringify(
                            req.query) !== "{}" && JSON.stringify(req.query) : ""}`
                    );
                    break;
                case "PROPPATCH":
                    this.instance.log.info(
                        "request",
                        `${chalk.bgCyan(chalk.cyan(" PPA "))} ${chalk.bold(
                            req.url)} ${this.instance.configurationManager.config.logQueryParameters ? JSON.stringify(
                            req.query) !== "{}" && JSON.stringify(req.query) : ""}`
                    );
                    break;
                default:
                    this.instance.log.error(
                        "core_requests",
                        `ERROR IN REQUEST LOGGER, UNKNOWN REQUEST TYPE: ${req.method}, ${chalk.bold(
                            req.url)} ${this.instance.configurationManager.config.logQueryParameters ? JSON.stringify(
                            req.query) !== "{}" && JSON.stringify(req.query) : ""}`
                    );
            }

            return next();
        });

        await this.instance.authorization.__internal_authHook(this.app);

        const self = this;
        this.instance.authorization.publicPaths.push("/")
        this.app.get(
            "/",
            async function handler(req, res) {
                if (self.instance.configurationManager.config.isDevMode) {
                    return res.redirect(
                        `http://localhost:5173/login/http://localhost:3563`
                    );
                }

                return res.redirect(
                    `https://yourdash.ewsgit.uk/login/${/* this.globalDb.get("core:this.instanceurl") */ "FIXME: implement this"}`
                );
            }
        );

        this.instance.authorization.publicPaths.push("/test")
        this.app.get(
            "/test",
            async () => {
                return {
                    version: { major: 0, minor: 1 },
                    type: "YourDash" as const,
                    status: this.instance.getStatus() || InstanceStatus.NON_FUNCTIONAL
                };
            }
        );

        this.instance.authorization.publicPaths.push("/418")
        this.app.get(
            "/418",
            async () => {
                return "This is a yourdash instance, not a coffee pot. This server does not implement the Hyper Text Coffee Pot Control Protocol";
            }
        );

        this.instance.authorization.publicPaths.push("/ping")
        this.app.get(
            "/ping",
            async () => {
                return "pong";
            }
        );

        this.instance.authorization.publicPaths.push("/core/test/self-ping")
        this.app.get(
            "/core/test/self-ping",
            async (req, res) => {
                return res.json({ success: true });
            }
        );

        this.instance.authorization.publicPaths.push("/login/instance/metadata")
        this.app.get(
            "/login/instance/metadata",
            (req, res) => {
                return res.json({
                                    title: "YourDash Instance",
                                    message:
                                        "Placeholder message. Hey system admin, you should change this!",
                                    loginLayout: LoginLayout.CARDS
                                });
            }
        );

        // TODO: replace this with tRPC

        this.app.get(
            "/login/user/:username",
            async (req, res) => {
                const user = new User(
                    (req.params as unknown as { username: string }).username
                );
                if (await user.doesExist()) {
                    res.status(200);
                    return res.json({
                                        name: {
                                            first: await user.getForename(),
                                            last: await user.getSurname()
                                        }
                                    });
                } else {
                    res.status(404);
                    return res.json({ error: "Unknown user" });
                }
            }
        );

        this.app.get(
            "/login/user/:username/avatar",
            async (req, res) => {
                const user = new User(
                    (req.params as unknown as { username: string }).username
                );
                if (await user.doesExist()) {
                    res.status(200);
                    return res.sendFile(
                        path.join(
                            this.instance.filesystem.commonPaths.UserSystemDirectory(
                                user.username
                            ),
                            "avatar128.webp"
                        ),
                    );
                } else {
                    return res.status(404);
                }
            }
        );

        this.app.post(
            "/login/user/authenticate",
            async (req, res) => {
                const body = req.body as { username: string; password: string };
                const user = new User(body.username);

                if (await user.doesExist()) {
                    res.status(200);

                    // perform authorization
                    let sessionToken = await this.instance.authorization.authenticateUser(
                        body.username,
                        body.password,
                        YourDashSessionType.WEB
                    );

                    if (sessionToken === null) {
                        res.status(401);
                        return { error: "Password did not match." };
                    }

                    res.cookie("authorization", sessionToken, {
                        httpOnly: true,
                        maxAge: 7 * 86400,
                        path: "/",
                        sameSite: "none",
                        secure: true
                    });

                    return res.json({ success: true });
                } else {
                    return res.status(404);
                }
            }
        );

        this.app.post(
            "/login/user/logout",
            async (req, res) => {
                res.clearCookie("authorization");

                res.status(200);

                return res.json({ success: true });
            }
        );

        this.app.get(
            "/login/instance/background",
            async (req, res) => {
                res.status(200);
                return res.sendFile(
                    path.join(
                        this.instance.filesystem.commonPaths.SystemDirectory(),
                        "loginBackground.avif"
                    ),
                );
            }
        );

        this.app.get(
            "/core/login/notice",
            async (req, res) => {
                return res.json({
                                    author: "System",
                                    message: "This is a sample notice message",
                                    timestamp: Date.now(),
                                    display: true
                                });
            }
        );

        this.app.get(
            "/login/is-authenticated",
            async (req, res) => {
                const authorization = req.cookies["authorization"];

                if (!authorization) {
                    return res.status(401).send();
                }

                const [ username, sessionToken ] = authorization.split(" ");

                if (
                    !(await this.instance.authorization.authorizeUser(
                        username,
                        `${username} ${sessionToken}`
                    ))
                ) {
                    return res.status(401).send();
                }

                return res.status(200).send();
            }
        );

        this.app.get("/panel/logo/small", async (req, res) => {
            return res.sendFile(
                path.join(
                    this.instance.filesystem.commonPaths.SystemDirectory(),
                    "instanceLogo32.webp"
                )
            );
        });

        this.app.get("/panel/logo/medium", async (req, res) => {
            return res.sendFile(
                path.join(
                    this.instance.filesystem.commonPaths.SystemDirectory(),
                    "instanceLogo40.webp"
                )
            );
        });

        this.app.get("/panel/logo/large", async (req, res) => {
            return res.sendFile(
                path.join(
                    this.instance.filesystem.commonPaths.SystemDirectory(),
                    "instanceLogo128.webp"
                ),
            );
        });

        this.app.get(
            "/core/panel/applications",
            async (req, res) => {
                const applications = this.instance.applications.loadedApplications;

                return applications.map((app) => {
                    return res.json({
                                        id: app._applicationParameters.id,
                                        displayName: app._applicationParameters.displayName,
                                        description: app._applicationParameters.description,
                                        type: "frontend",
                                        endpoint: `/app/a/${app._applicationParameters.id}/`
                                    });
                });
            }
        );

        this.app.get(
            "/core/panel/applications/app/largeGrid/:applicationId",
            async (req, res) => {
                const applicationId = (req.params as { applicationId: string }).applicationId;

                const app = this.instance.applications.loadedApplications.find(
                    (a) => a._applicationParameters.id === applicationId
                );

                if (!app) {
                    return res.status(404);
                }

                if (
                    await this.instance.filesystem.doesPathExist(
                        path.join(
                            this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
                            "panel/applications",
                            app._applicationParameters.id,
                            "largeGridIcon.webp"
                        )
                    )
                ) {
                    // return this.sendFile(res, path.join(app?._applicationSourcePath, "./icon.avif"), "image/avif");
                    return res.sendFile(
                        path.join(
                            this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
                            "panel/applications",
                            app._applicationParameters.id,
                            "largeGridIcon.webp"
                        ),
                    );
                }

                await fs.mkdir(
                    path.join(
                        this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
                        "panel/applications",
                        app._applicationParameters.id
                    ),
                    {
                        recursive: true
                    }
                );

                if (
                    !(await this.instance.filesystem.doesPathExist(
                        path.join(app?._applicationSourcePath, "./assets/icon.png")
                    ))
                ) {
                    return res.sendFile(
                        path.join(
                            this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
                            "panel",
                            "invalidIcon.webp"
                        ),
                    );
                }

                await resizeImage(
                    path.join(app?._applicationSourcePath, "./assets/icon.png"),
                    88,
                    88,
                    path.join(
                        this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
                        "panel/applications",
                        app._applicationParameters.id,
                        "largeGridIcon.webp"
                    ),
                    "webp"
                );

                return res.sendFile(
                    path.join(
                        this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
                        "panel/applications",
                        app._applicationParameters.id,
                        "largeGridIcon.webp"
                    ),
                );
            }
        );

        this.app.get(
            "/core/panel/applications/app/smallGrid/:applicationId",
            async (req, res) => {
                const applicationId = (req.params as { applicationId: string }).applicationId;

                const app = this.instance.applications.loadedApplications.find(
                    (a) => a._applicationParameters.id === applicationId
                );

                if (!app) {
                    return res.status(404);
                }

                if (
                    await this.instance.filesystem.doesPathExist(
                        path.join(
                            this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
                            "panel/applications",
                            app._applicationParameters.id,
                            "smallGridIcon.webp"
                        )
                    )
                ) {
                    // return this.sendFile(res, path.join(app?._applicationSourcePath, "./icon.avif"), "image/avif");
                    return res.sendFile(
                        path.join(
                            this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
                            "panel/applications",
                            app._applicationParameters.id,
                            "smallGridIcon.webp"
                        ),
                    );
                }

                await fs.mkdir(
                    path.join(
                        this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
                        "panel/applications",
                        app._applicationParameters.id
                    ),
                    {
                        recursive: true
                    }
                );

                if (
                    !(await this.instance.filesystem.doesPathExist(
                        path.join(app?._applicationSourcePath, "./assets/icon.png")
                    ))
                ) {
                    return res.sendFile(
                        path.join(
                            this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
                            "panel",
                            "invalidIcon.webp"
                        ),
                    );
                }

                await resizeImage(
                    path.join(app?._applicationSourcePath, "./assets/icon.png"),
                    88,
                    88,
                    path.join(
                        this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
                        "panel/applications",
                        app._applicationParameters.id,
                        "smallGridIcon.webp"
                    ),
                    "webp"
                );

                return res.sendFile(
                    path.join(
                        this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
                        "panel/applications",
                        app._applicationParameters.id,
                        "smallGridIcon.webp"
                    ),
                );
            }
        );

        this.app.get(
            "/core/panel/applications/app/list/:applicationId",
            async (req, res) => {
                const applicationId = (req.params as { applicationId: string }).applicationId;

                const app = this.instance.applications.loadedApplications.find(
                    (a) => a._applicationParameters.id === applicationId
                );

                if (!app) {
                    return res.status(404);
                }

                if (
                    await this.instance.filesystem.doesPathExist(
                        path.join(
                            this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
                            "panel/applications",
                            app._applicationParameters.id,
                            "listIcon.webp"
                        )
                    )
                ) {
                    // return this.sendFile(res, path.join(app?._applicationSourcePath, "./icon.avif"), "image/avif");
                    return res.sendFile(
                        path.join(
                            this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
                            "panel/applications",
                            app._applicationParameters.id,
                            "listIcon.webp"
                        ),
                    );
                }

                await fs.mkdir(
                    path.join(
                        this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
                        "panel/applications",
                        app._applicationParameters.id
                    ),
                    {
                        recursive: true
                    }
                );

                if (
                    !(await this.instance.filesystem.doesPathExist(
                        path.join(app?._applicationSourcePath, "./assets/icon.png")
                    ))
                ) {
                    return res.sendFile(
                        path.join(
                            this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
                            "panel",
                            "invalidIcon.webp"
                        ),
                    );
                }

                await resizeImage(
                    path.join(app?._applicationSourcePath, "./assets/icon.png"),
                    88,
                    88,
                    path.join(
                        this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
                        "panel/applications",
                        app._applicationParameters.id,
                        "listIcon.webp"
                    ),
                    "webp"
                );

                return res.sendFile(
                    path.join(
                        this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
                        "panel/applications",
                        app._applicationParameters.id,
                        "listIcon.webp"
                    ),
                );
            }
        );

        /*
         async (req, res) => {
         res.set("Cache-Control", "no-store");

         const { username, sessionid } = req.headers;

         const panel = new YourDashPanel(username);

         return res.json(
         (
         await Promise.all(
         (await panel.getQuickShortcuts()).map(async (shortcut) => {
         const module = this.core.applicationManager.loadedModules[shortcut.moduleType]?.find(
         (mod) => mod.config.id === shortcut.id,
         );

         if (!module) {
         return;
         }

         const RESIZED_ICON_PATH = path.join("cache/modules/icons", `${module.config.id}`, "64.png");

         if (!(await this.core.fs.doesExist(RESIZED_ICON_PATH))) {
         this.core.log.info("core:panel", `Generating 64x64 icon for ${module.config.id}`);

         await this.core.fs.createDirectory(path.dirname(RESIZED_ICON_PATH));

         const resizedIconPath = await this.core.image.resizeTo(
         this.core.applicationManager.getModuleIcon(shortcut.moduleType, shortcut.id),
         64,
         64,
         "webp",
         );

         await this.core.fs.copy(resizedIconPath, RESIZED_ICON_PATH);
         await this.core.fs.removePath(resizedIconPath);
         }

         let isOfficialFrontend: "frontend" | "officialFrontend" = "officialFrontend";

         // @ts-ignore
         if (module.config.url || module.config.devUrl) {
         isOfficialFrontend = "frontend";
         }

         return {
         name: module?.config.displayName || "Undefined name",
         module: shortcut,
         icon: this.core.image.createAuthenticatedImage(username, sessionid, AUTHENTICATED_IMAGE_TYPE.FILE, RESIZED_ICON_PATH),
         // @ts-ignore
         url: (isOfficialFrontend === "officialFrontend"
         ? `/app/a/${module.config.id}`
         : this.core.isDevMode
         ? // @ts-ignore
         module?.config?.devUrl! || ""
         : // @ts-ignore
         module?.config?.url! || "") as string,
         };
         }),
         )
         ).filter((x) => x !== undefined),
         );
         },
         );
         */

        this.app.get(
            "/core/panel/quick-shortcuts",
            async (req, res) => {
                const username = this.getRequestUsername();
                const query = await this.instance.database`SELECT pinned_applications FROM public.panel_configuration WHERE username = ${username}`

                const pinnedApplications: YourDashApplication[] =
                    query[0].pinned_applications.map((a: string) =>
                                                         this.instance.applications.loadedApplications.find(
                                                             (i) => i._applicationParameters.id === a
                                                         )
                    ).filter((a: YourDashApplication | undefined) => a !== undefined);

                return pinnedApplications.map((app) => {
                    if (app._applicationParameters.frontend) {
                        return res.json({
                            displayName: app._applicationParameters.displayName,
                            id: app._applicationParameters.id,
                            endpoint: `/app/a/${app._applicationParameters.id}`
                        });
                    }

                    return res.json({
                        displayName: app._applicationParameters.displayName,
                        id: app._applicationParameters.id,
                        url:
                            app._applicationParameters.externalFrontend?.url || "example.com"
                    });
                });
            }
        );

        this.app.get(
            "/core/panel/quick-shortcut/icon/:applicationId",
            async (req, res) => {
                const applicationId = (req.params as { applicationId: string }).applicationId;

                const app = this.instance.applications.loadedApplications.find(
                    (a) => a._applicationParameters.id === applicationId
                );

                if (!app) {
                    return res.status(404);
                }

                if (
                    await this.instance.filesystem.doesPathExist(
                        path.join(
                            this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
                            "panel/applications",
                            app._applicationParameters.id,
                            "quickShortcut.webp"
                        )
                    )
                ) {
                    // return this.sendFile(res, path.join(app?._applicationSourcePath, "./icon.avif"), "image/avif");
                    return res.sendFile(
                        path.join(
                            this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
                            "panel/applications",
                            app._applicationParameters.id,
                            "quickShortcut.webp"
                        ),
                    );
                }

                await fs.mkdir(
                    path.join(
                        this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
                        "panel/applications",
                        app._applicationParameters.id
                    ),
                    {
                        recursive: true
                    }
                );

                await resizeImage(
                    path.join(app?._applicationSourcePath, "./assets/icon.png"),
                    88,
                    88,
                    path.join(
                        this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
                        "panel/applications",
                        app._applicationParameters.id,
                        "quickShortcut.webp"
                    ),
                    "webp"
                );

                return res.sendFile(
                    path.join(
                        this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
                        "panel/applications",
                        app._applicationParameters.id,
                        "quickShortcut.webp"
                    ),
                );
            }
        );

        this.app.post(
            "/core/panel/quick-shortcuts/create",
            async (req, res) => {
                const applicationId = (req.body as { id: string }).id;
                const username = this.getRequestUsername();

                if (
                    this.instance.applications.loadedApplications.find(
                        (i) => i._applicationParameters.id === applicationId
                    )
                ) {
                    try {
                        const previousPins = await this.instance.database`SELECT pinned_applications
                                                                          FROM public.panel_configuration
                                                                          WHERE username = ${username};`;

                        if (
                            previousPins[0].pinned_applications.includes(applicationId)
                        ) {
                            return { success: false };
                        }

                        const newPins = [
                            ...previousPins[0].pinned_applications,
                            applicationId
                        ];

                        await this.instance.database`UPDATE public.panel_configuration
                                                     SET pinned_applications = ${newPins}
                                                     WHERE username = ${username};`;

                        return { success: true };
                    } catch (error) {
                        return { success: false };
                    }
                }
            }
        );

        this.app.get(
            "/core/panel",
            async (req, res) => {
                const username = this.getRequestUsername();

                const dbquery = await this.instance.database`SELECT widgets, size
                                                             FROM public.panel_configuration
                                                             WHERE username = ${username};`;

                return {
                    widgets: dbquery[0].widgets,
                    size: dbquery[0].size
                };
            }
        );

        this.app.use(
            // @ts-ignore
            (error, req, res, next) => {
                if (!error.cause) {
                    console.error(error);
                    return res.json({
                                        status: 500,
                                        message:
                                            "Internal server error, if you are a developer or administrator, please check the console."
                                    });
                }

                const cause: {
                    name: string;
                    issues: {
                        code: string;
                        expected: string;
                        recieved: string;
                        path: string[];
                        message: string;
                    }[];
                } = error.cause as any;

                // noinspection SuspiciousTypeOfGuard
                if (cause.name === "ZodError") {
                    res.status(400).json({
                                             statusCode: 400,
                                             error: "Bad Request", // @ts-ignore
                                             httpPart: error.httpPart!,
                                             issues: cause.issues
                                         });
                } else {
                    // Log error
                    this.instance.log.error("request_manager", error);
                    // Send error response
                    res.status(500).json({ ok: false });
                }
            }
        );
    }

    // start listening for requests
    // once called, no more routes may be defined
    async __internal_beginListening() {
        this.instance.log.info(
            "request_manager",
            "Starting RequestManager Listening..."
        );
        try {
            this.app.listen({
                                      port: this.instance.configurationManager.config.port,
                                      host: "0.0.0.0"
                                  });
            this.instance.log.info(
                "request_manager",
                `YourDash Instance Backend Online & listening at ${this.instance.log.addEmphasisToString(
                    `port ${this.instance.configurationManager.config.port}`)}`
            );

            this.instance.log.info("request_manager", `Attempting to ping self`);
            fetch(
                `http://localhost:${this.instance.configurationManager.config.port}/core/test/self-ping`
                // @ts-ignore
            ).then((resp) => resp.json())
                // @ts-ignore
              .then((data: { success?: boolean }) => {
                  if (data?.success) {
                      this.instance.setStatus(InstanceStatus.OK);
                      return this.instance.log.success(
                          "self_ping_test",
                          "self ping successful - The server is receiving requests"
                      );
                  }

                  this.instance.log.error(
                      "request_manager",
                      "CRITICAL ERROR!, unable to ping self"
                  );
              }).catch(() => {
                this.instance.log.error(
                    "request_manager",
                    "CRITICAL ERROR!, unable to ping self"
                );
            });
        } catch (err) {
            this.instance.log.error("request_manager", err);
            console.error(err);
            process.exit(1);
        }
    }

    getRequestUsername() {
        // @ts-ignore
        return requestContext.get("username") as string;
    }

    getRequestSessionToken() {
        // @ts-ignore
        return requestContext.get("sessionToken") as string;
    }
}

export default RequestManager;

export type AppRouter = RequestManager["tRPCRouter"];
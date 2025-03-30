/*
 * Copyright ©2025 Ewsgit <https://ewsgit.uk> and YourDash <https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import fastifyCookie from "@fastify/cookie";
import cors from "@fastify/cors";
import fastifyFormBody from "@fastify/formbody";
import { fastifyRequestContext, requestContext } from "@fastify/request-context";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import chalk from "chalk";
import Fastify from "fastify";
import type { FastifyError, FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { jsonSchemaTransform, serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import type { ZodTypeProvider } from "fastify-type-provider-zod"
import { createReadStream } from "fs";
import { mkdir } from "fs/promises";
import path from "path";
import { fetch } from "undici";
import { z } from "zod";
import { YourDashApplication } from "./applications.js";
import { YourDashSessionType } from "./authorization.js";
import { resizeImage } from "./image.js";
import { type Instance } from "./main.js";
import { InstanceStatus } from "./types/instanceStatus.js";
import User from "./user.js";

enum LoginLayout {
  SIDEBAR,
  MODAL,
  CARDS,
}

declare module "zod" {
  interface ZodError {
    httpPart?: string;
  }
}

class RequestManager {
  app: FastifyInstance;
  private instance: Instance;

  constructor(instance: Instance) {
    this.instance = instance;

    this.app = Fastify({
      logger: {
        msgPrefix: "YourDash Backend -> ",
        enabled: false,
      },
    }).withTypeProvider<ZodTypeProvider>();

    this.app.addHttpMethod("PROPFIND", { hasBody: true });
    this.app.addHttpMethod("PROPPATCH", { hasBody: true });

    return this;
  }

  sendFile(res: FastifyReply, filePath: string, mimeType: string) {
    const stream = createReadStream(path.resolve(filePath));

    return res.type(mimeType).send(stream);
  }

  async __internal_startup() {
    this.instance.log.info("request_manager", "Starting RequestManager...");
    try {
      await this.instance.database.query(`CREATE TABLE IF NOT EXISTS public.request_manager_log
                                           (
                                               request_id        serial primary key,
                                               request_timestamp bigint NOT NULL,
                                               request_method    text   NOT NULL,
                                               request_path      text   NOT NULL,
                                               request_body      text
                                           )`);
    } catch (err) {
      console.error(err);
    }

    this.app.setValidatorCompiler(validatorCompiler);
    this.app.setSerializerCompiler(serializerCompiler);

    this.app.setErrorHandler((error: FastifyError, _: FastifyRequest, reply: FastifyReply) => {
      const cause: { name: string; issues: { code: string; expected: string; recieved: string; path: string[]; message: string }[] } =
        error.cause as any;

      // noinspection SuspiciousTypeOfGuard
      if (cause.name === "ZodError") {
        reply.status(400).send({
          statusCode: 400,
          error: "Bad Request", // @ts-ignore
          httpPart: error.httpPart!,
          issues: cause.issues,
        });
      }

      reply.send(error);
    });

    this.app.setErrorHandler((error, request, reply) => {
      if (error instanceof Fastify.errorCodes.FST_ERR_BAD_STATUS_CODE) {
        // Log error
        this.instance.log.error("request_manager", error);
        // Send error response
        reply.status(500).send({ ok: false });
      } else {
        this.instance.log.error("request_manager", error);
        // fastify will use parent error handler to handle this
        reply.send(error);
      }
    });

    await this.app.register(cors, {
      methods: "*",
      origin: "http://localhost:5173",
      credentials: true,
    });

    await this.app.register(fastifyCookie, {
      secret: this.instance.flags.cookieSecret,
      hook: "onRequest",
      parseOptions: {}, // options for parsing cookies
    });

    await this.app.register(fastifyFormBody);

    await this.app.register(fastifySwagger, {
      openapi: {
        info: {
          title: "YourDash Backend",
          description: "The YourDash Instance Backend",
          version: "0.0.1",
        },
        servers: [
          {
            url: "http://localhost:3563",
            description: "Local development server",
          },
        ],
        openapi: "3.1.0",
      },
      transform: jsonSchemaTransform,
    });

    await this.app.register(fastifySwaggerUI, {
      routePrefix: "/swagger",
      uiConfig: {},
      logo: {
        type: "image/png",
        content: (await Bun.file(path.join(process.cwd(), "./defaults/yourdash.png")).bytes()) as unknown as string,
        href: "/swagger",
        target: "_blank",
      },
      staticCSP: true,
      theme: {
        favicon: [
          {
            filename: "favicon.png",
            rel: "icon",
            sizes: "1024x1024",
            type: "image/png",
            content: (await Bun.file(path.join(process.cwd(), "./defaults/yourdash.png")).bytes()) as unknown as string,
          },
        ],
        css: [
          {
            filename: "theme.css",
            content: (await Bun.file(path.join(process.cwd(), "./src/swagger.css")).text()),
          },
        ],
      },
    });

    await this.app.register(fastifyRequestContext);

    this.app.addHook("onResponse", async (req, res) => {
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
              `${chalk.bgBlack(chalk.green(" GET "))} ${chalk.bgBlack(chalk.red(` ${res.statusCode} `))} ${chalk.bold(req.url)} ${this.instance.flags.logQueryParameters ? JSON.stringify(req.query) !== "{}" && JSON.stringify(req.query) : ""}`,
            );
            break;
          case "POST":
            this.instance.log.info(
              "response",
              `${chalk.bgBlack(chalk.blue(" POS "))} ${chalk.bgBlack(chalk.red(` ${res.statusCode} `))} ${chalk.bold(req.url)} ${this.instance.flags.logQueryParameters ? JSON.stringify(req.query) !== "{}" && JSON.stringify(req.query) : ""}`,
            );
            break;
          case "DELETE":
            this.instance.log.info(
              "response",
              `${chalk.bgBlack(chalk.red(" DEL "))} ${chalk.bgBlack(chalk.red(` ${res.statusCode} `))} ${chalk.bold(req.url)} ${this.instance.flags.logQueryParameters ? JSON.stringify(req.query) !== "{}" && JSON.stringify(req.query) : ""}`,
            );
            break;
          case "OPTIONS":
            if (this.instance.flags.logOptionsRequests) {
              this.instance.log.info(
                "response",
                `${chalk.bgBlack(chalk.cyan(" OPT "))} ${chalk.bgBlack(chalk.red(` ${res.statusCode} `))} ${chalk.bold(req.url)} ${this.instance.flags.logQueryParameters ? JSON.stringify(req.query) !== "{}" && JSON.stringify(req.query) : ""}`,
              );
            }
            break;
          case "PROPFIND":
            this.instance.log.info(
              "response",
              `${chalk.bgBlack(chalk.cyan(" PFI "))} ${chalk.bgBlack(chalk.red(` ${res.statusCode} `))} ${chalk.bold(req.url)} ${this.instance.flags.logQueryParameters ? JSON.stringify(req.query) !== "{}" && JSON.stringify(req.query) : ""}`,
            );
            break;
          case "PROPPATCH":
            this.instance.log.info(
              "response",
              `${chalk.bgCyan(chalk.cyan(" PPA "))} ${chalk.bgBlack(chalk.red(` ${res.statusCode} `))} ${chalk.bgBlack(chalk.red(` ${res.statusCode} `))} ${chalk.bold(req.url)} ${this.instance.flags.logQueryParameters ? JSON.stringify(req.query) !== "{}" && JSON.stringify(req.query) : ""}`,
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
              `${chalk.bgBlack(chalk.green(" GET "))} ${chalk.bgBlack(chalk.red(` ${res.statusCode} `))} ${chalk.bold(req.url)} ${this.instance.flags.logQueryParameters ? JSON.stringify(req.query) !== "{}" && JSON.stringify(req.query) : ""}`,
            );
            break;
          case "POST":
            this.instance.log.info(
              "response",
              `${chalk.bgBlack(chalk.blue(" POS "))} ${chalk.bgBlack(chalk.red(` ${res.statusCode} `))} ${chalk.bold(req.url)} ${this.instance.flags.logQueryParameters ? JSON.stringify(req.query) !== "{}" && JSON.stringify(req.query) : ""}`,
            );
            break;
          case "DELETE":
            this.instance.log.info(
              "response",
              `${chalk.bgBlack(chalk.red(" DEL "))} ${chalk.bgBlack(chalk.red(` ${res.statusCode} `))} ${chalk.bold(req.url)} ${this.instance.flags.logQueryParameters ? JSON.stringify(req.query) !== "{}" && JSON.stringify(req.query) : ""}`,
            );
            break;
          case "OPTIONS":
            if (this.instance.flags.logOptionsRequests) {
              this.instance.log.info(
                "response",
                `${chalk.bgBlack(chalk.cyan(" OPT "))} ${chalk.bgBlack(chalk.red(` ${res.statusCode} `))} ${chalk.bold(req.url)} ${this.instance.flags.logQueryParameters ? JSON.stringify(req.query) !== "{}" && JSON.stringify(req.query) : ""}`,
              );
            }
            break;
          case "PROPFIND":
            this.instance.log.info(
              "response",
              `${chalk.bgBlack(chalk.cyan(" PFI "))} ${chalk.bgBlack(chalk.red(` ${res.statusCode} `))} ${chalk.bold(req.url)} ${this.instance.flags.logQueryParameters ? JSON.stringify(req.query) !== "{}" && JSON.stringify(req.query) : ""}`,
            );
            break;
          case "PROPPATCH":
            this.instance.log.info(
              "response",
              `${chalk.bgCyan(chalk.cyan(" PPA "))} ${chalk.bgBlack(chalk.red(` ${res.statusCode} `))} ${chalk.bold(req.url)} ${this.instance.flags.logQueryParameters ? JSON.stringify(req.query) !== "{}" && JSON.stringify(req.query) : ""}`,
            );
            break;
          default:
        }
      }
    });

    this.app.addHook("onRequest", async (req, res) => {
      let queryResult = await this.instance.database.query(
        "INSERT INTO public.request_manager_log (request_timestamp, request_method, request_path, request_body) VALUES ($1, $2, $3, $4) RETURNING request_id;",
        [Date.now(), req.method, req.url, req.body],
      );

      res.header("request-id", JSON.stringify(queryResult.rows[0].request_id));

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
            `${chalk.bgBlack(chalk.green(" GET "))} ${chalk.bold(req.url)} ${this.instance.flags.logQueryParameters ? JSON.stringify(req.query) !== "{}" && JSON.stringify(req.query) : ""}`,
          );
          break;
        case "POST":
          this.instance.log.info(
            "request",
            `${chalk.bgBlack(chalk.blue(" POS "))} ${chalk.bold(req.url)} ${this.instance.flags.logQueryParameters ? JSON.stringify(req.query) !== "{}" && JSON.stringify(req.query) : ""}`,
          );
          break;
        case "DELETE":
          this.instance.log.info(
            "request",
            `${chalk.bgBlack(chalk.red(" DEL "))} ${chalk.bold(req.url)} ${this.instance.flags.logQueryParameters ? JSON.stringify(req.query) !== "{}" && JSON.stringify(req.query) : ""}`,
          );
          break;
        case "OPTIONS":
          if (this.instance.flags.logOptionsRequests) {
            this.instance.log.info(
              "request",
              `${chalk.bgBlack(chalk.cyan(" OPT "))} ${chalk.bold(req.url)} ${this.instance.flags.logQueryParameters ? JSON.stringify(req.query) !== "{}" && JSON.stringify(req.query) : ""}`,
            );
          }
          break;
        case "PROPFIND":
          this.instance.log.info(
            "request",
            `${chalk.bgBlack(chalk.cyan(" PFI "))} ${chalk.bold(req.url)} ${this.instance.flags.logQueryParameters ? JSON.stringify(req.query) !== "{}" && JSON.stringify(req.query) : ""}`,
          );
          break;
        case "PROPPATCH":
          this.instance.log.info(
            "request",
            `${chalk.bgCyan(chalk.cyan(" PPA "))} ${chalk.bold(req.url)} ${this.instance.flags.logQueryParameters ? JSON.stringify(req.query) !== "{}" && JSON.stringify(req.query) : ""}`,
          );
          break;
        default:
          this.instance.log.error(
            "core_requests",
            `ERROR IN REQUEST LOGGER, UNKNOWN REQUEST TYPE: ${req.method}, ${chalk.bold(req.url)} ${this.instance.flags.logQueryParameters ? JSON.stringify(req.query) !== "{}" && JSON.stringify(req.query) : ""}`,
          );
      }

      return;
    });

    await this.instance.authorization.__internal_authHook(this.app);

    const self = this;
    this.app.after(() => {
      this.app.get("/", { config: { isPublic: true } }, async function handler(req, res) {
        if (self.instance.flags.isDevMode) {
          return res.redirect(`http://localhost:5173/login/http://localhost:3563`);
        }

        return res.redirect(`https://yourdash.ewsgit.uk/login/${/* this.globalDb.get("core:this.instanceurl") */ "FIXME: implement this"}`);
      });

      this.app.get(
        "/test",
        {
          config: { isPublic: true },
          schema: {
            response: {
              200: z.object({
                version: z.object({ major: z.number(), minor: z.number() }),
                type: z.literal("YourDash"),
                status: z.nativeEnum(InstanceStatus),
              }),
            },
          },
        },
        async () => {
          return {
            version: { major: 0, minor: 1 },
            type: "YourDash" as const,
            status: this.instance.getStatus() || InstanceStatus.NON_FUNCTIONAL,
          };
        },
      );

      this.app.get("/418", { schema: { response: { 200: z.string() } }, config: { isPublic: true } }, async () => {
        return "This is a yourdash instance, not a coffee pot. This server does not implement the Hyper Text Coffee Pot Control Protocol";
      });

      this.app.get("/ping", { schema: { response: { 200: z.string() } }, config: { isPublic: true } }, async () => {
        return "pong";
      });

      this.app.get(
        "/core/test/self-ping",
        { schema: { response: { 200: z.object({ success: z.boolean() }) } }, config: { isPublic: true } },
        async () => {
          return { success: true };
        },
      );
    });

    this.app.get(
      "/login/instance/metadata",
      {
        schema: { response: { 200: z.object({ title: z.string(), message: z.string(), loginLayout: z.nativeEnum(LoginLayout) }) } },
        config: { isPublic: true },
      },
      () => {
        return {
          title: "YourDash Instance",
          message: "Placeholder message. Hey system admin, you should change this!",
          loginLayout: LoginLayout.CARDS,
        };
      },
    );

    this.app.get(
      "/login/user/:username",
      {
        schema: {
          response: { 200: z.object({ name: z.object({ first: z.string(), last: z.string() }) }), 404: z.object({ error: z.string() }) },
        },
        config: { isPublic: true },
      },
      async (req, res) => {
        const user = new User((req.params as unknown as { username: string }).username);
        if (await user.doesExist()) {
          res.status(200);
          return {
            name: {
              first: await user.getForename(),
              last: await user.getSurname(),
            },
          };
        } else {
          res.status(404);
          return { error: "Unknown user" };
        }
      },
    );

    this.app.get("/login/user/:username/avatar", { config: { isPublic: true } }, async (req, res) => {
      const user = new User((req.params as unknown as { username: string }).username);
      if (await user.doesExist()) {
        res.status(200);
        return this.instance.requestManager.sendFile(
          res,
          path.join(this.instance.filesystem.commonPaths.UserSystemDirectory(user.username), "avatar128.webp"),
          "image/webp",
        );
      } else {
        return res.status(404);
      }
    });

    this.app.post(
      "/login/user/authenticate",
      { schema: { body: z.object({ username: z.string(), password: z.string() }) }, config: { isPublic: true } },
      async (req, res) => {
        const body = req.body as { username: string; password: string };
        const user = new User(body.username);

        if (await user.doesExist()) {
          res.status(200);

          // perform authorization
          let sessionToken = await this.instance.authorization.authenticateUser(body.username, body.password, YourDashSessionType.WEB);

          if (sessionToken === null) {
            res.status(401);
            return { error: "Password did not match." };
          }

          res.cookie("authorization", sessionToken, {
            httpOnly: true,
            maxAge: 7 * 86400,
            path: "/",
            sameSite: "none",
            secure: true,
          });

          return { success: true };
        } else {
          return res.status(404);
        }
      },
    );

    this.app.post("/login/user/logout", { schema: { response: { 200: z.object({ success: z.boolean() }) } } }, async (req, res) => {
      res.clearCookie("authorization");

      res.status(200);

      return { success: true };
    });

    this.app.get("/login/instance/background", { config: { isPublic: true } }, async (req, res) => {
      res.status(200);
      return this.instance.requestManager.sendFile(
        res,
        path.join(this.instance.filesystem.commonPaths.SystemDirectory(), "loginBackground.avif"),
        "image/avif",
      );
    });

    this.app.get(
      "/core/login/notice",
      { schema: { response: { 200: z.object({ author: z.string(), message: z.string(), timestamp: z.number(), display: z.boolean() }) } } },
      async (req, res) => {
        return {
          author: "System",
          message: "This is a sample notice message",
          timestamp: Date.now(),
          display: true,
        };
      },
    );

    this.app.get("/login/is-authenticated", { config: { isPublic: true } }, async (req, res) => {
      const authorization = req.cookies["authorization"];

      if (!authorization) {
        return res.status(401).send();
      }

      const [username, sessionToken] = authorization.split(" ");

      if (!(await this.instance.authorization.authorizeUser(username, `${username} ${sessionToken}`))) {
        return res.status(401).send();
      }

      return res.status(200).send();
    });

    this.app.get("/panel/logo/small", async (req, res) => {
      return this.sendFile(res, path.join(this.instance.filesystem.commonPaths.SystemDirectory(), "instanceLogo32.webp"), "image/webp");
    });

    this.app.get("/panel/logo/medium", async (req, res) => {
      return this.sendFile(res, path.join(this.instance.filesystem.commonPaths.SystemDirectory(), "instanceLogo40.webp"), "image/webp");
    });

    this.app.get("/panel/logo/large", async (req, res) => {
      return this.sendFile(res, path.join(this.instance.filesystem.commonPaths.SystemDirectory(), "instanceLogo128.webp"), "image/webp");
    });

    this.app.get(
      "/core/panel/applications",
      {
        schema: {
          response: {
            200: z
              .object({
                id: z.string(),
                displayName: z.string(),
                description: z.string(),
                type: z.literal("frontend").or(z.literal("externalFrontend")),
                endpoint: z.string().optional(),
                url: z.string().optional(),
              })
              .array(),
          },
        },
      },
      async (req, res) => {
        const applications = this.instance.applications.loadedApplications;

        return applications.map((app) => {
          return {
            id: app.__internal_params.id,
            displayName: app.__internal_params.displayName,
            description: app.__internal_params.description,
            type: "frontend",
            endpoint: `/app/a/${app.__internal_params.id}/`,
          };
        });
      },
    );

    this.app.get("/core/panel/applications/app/largeGrid/:applicationId", async (req, res) => {
      const applicationId = (req.params as { applicationId: string }).applicationId;

      const app = this.instance.applications.loadedApplications.find((a) => a.__internal_params.id === applicationId);

      if (!app) {
        return res.status(404);
      }

      if (
        await this.instance.filesystem.doesPathExist(
          path.join(
            this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
            "panel/applications",
            app.__internal_params.id,
            "largeGridIcon.webp",
          ),
        )
      ) {
        // return this.sendFile(res, path.join(app?.__internal_initializedPath, "./icon.avif"), "image/avif");
        return this.sendFile(
          res,
          path.join(
            this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
            "panel/applications",
            app.__internal_params.id,
            "largeGridIcon.webp",
          ),
          "image/webp",
        );
      }

      await mkdir(path.join(this.instance.filesystem.commonPaths.GlobalCacheDirectory(), "panel/applications", app.__internal_params.id), {
        recursive: true,
      });

      if (!(await this.instance.filesystem.doesPathExist(path.join(app?.__internal_initializedPath, "./assets/icon.png")))) {
        return this.sendFile(
          res,
          path.join(this.instance.filesystem.commonPaths.GlobalCacheDirectory(), "panel", "invalidIcon.webp"),
          "image/webp",
        );
      }

      await resizeImage(
        path.join(app?.__internal_initializedPath, "./assets/icon.png"),
        88,
        88,
        path.join(
          this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
          "panel/applications",
          app.__internal_params.id,
          "largeGridIcon.webp",
        ),
        "webp",
      );

      return this.sendFile(
        res,
        path.join(
          this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
          "panel/applications",
          app.__internal_params.id,
          "largeGridIcon.webp",
        ),
        "image/webp",
      );
    });

    this.app.get("/core/panel/applications/app/smallGrid/:applicationId", async (req, res) => {
      const applicationId = (req.params as { applicationId: string }).applicationId;

      const app = this.instance.applications.loadedApplications.find((a) => a.__internal_params.id === applicationId);

      if (!app) {
        return res.status(404);
      }

      if (
        await this.instance.filesystem.doesPathExist(
          path.join(
            this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
            "panel/applications",
            app.__internal_params.id,
            "smallGridIcon.webp",
          ),
        )
      ) {
        // return this.sendFile(res, path.join(app?.__internal_initializedPath, "./icon.avif"), "image/avif");
        return this.sendFile(
          res,
          path.join(
            this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
            "panel/applications",
            app.__internal_params.id,
            "smallGridIcon.webp",
          ),
          "image/webp",
        );
      }

      await mkdir(path.join(this.instance.filesystem.commonPaths.GlobalCacheDirectory(), "panel/applications", app.__internal_params.id), {
        recursive: true,
      });

      if (!(await this.instance.filesystem.doesPathExist(path.join(app?.__internal_initializedPath, "./assets/icon.png")))) {
        return this.sendFile(
          res,
          path.join(this.instance.filesystem.commonPaths.GlobalCacheDirectory(), "panel", "invalidIcon.webp"),
          "image/webp",
        );
      }

      await resizeImage(
        path.join(app?.__internal_initializedPath, "./assets/icon.png"),
        88,
        88,
        path.join(
          this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
          "panel/applications",
          app.__internal_params.id,
          "smallGridIcon.webp",
        ),
        "webp",
      );

      return this.sendFile(
        res,
        path.join(
          this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
          "panel/applications",
          app.__internal_params.id,
          "smallGridIcon.webp",
        ),
        "image/webp",
      );
    });

    this.app.get("/core/panel/applications/app/list/:applicationId", async (req, res) => {
      const applicationId = (req.params as { applicationId: string }).applicationId;

      const app = this.instance.applications.loadedApplications.find((a) => a.__internal_params.id === applicationId);

      if (!app) {
        return res.status(404);
      }

      if (
        await this.instance.filesystem.doesPathExist(
          path.join(
            this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
            "panel/applications",
            app.__internal_params.id,
            "listIcon.webp",
          ),
        )
      ) {
        // return this.sendFile(res, path.join(app?.__internal_initializedPath, "./icon.avif"), "image/avif");
        return this.sendFile(
          res,
          path.join(
            this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
            "panel/applications",
            app.__internal_params.id,
            "listIcon.webp",
          ),
          "image/webp",
        );
      }

      await mkdir(path.join(this.instance.filesystem.commonPaths.GlobalCacheDirectory(), "panel/applications", app.__internal_params.id), {
        recursive: true,
      });

      if (!(await this.instance.filesystem.doesPathExist(path.join(app?.__internal_initializedPath, "./assets/icon.png"),))) {
        return this.sendFile(
          res,
          path.join(this.instance.filesystem.commonPaths.GlobalCacheDirectory(), "panel", "invalidIcon.webp"),
          "image/webp",
        );
      }

      await resizeImage(
        path.join(app?.__internal_initializedPath, "./assets/icon.png"),
        88,
        88,
        path.join(
          this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
          "panel/applications",
          app.__internal_params.id,
          "listIcon.webp",
        ),
        "webp",
      );

      return this.sendFile(
        res,
        path.join(
          this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
          "panel/applications",
          app.__internal_params.id,
          "listIcon.webp",
        ),
        "image/webp",
      );
    });

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
      {
        schema: {
          response: {
            200: z.object({ displayName: z.string(), id: z.string(), endpoint: z.string().optional(), url: z.string().optional() }).array(),
          },
        },
      },
      async (req, res) => {
        const username = this.getRequestUsername();
        const query = await this.instance.database.query("SELECT pinned_applications FROM public.panel_configuration WHERE username = $1", [
          username,
        ]);

        const pinnedApplications: YourDashApplication[] = query.rows[0].pinned_applications.map((a: string) =>
          this.instance.applications.loadedApplications.find((i) => i.__internal_params.id === a),
        ).filter((a: YourDashApplication | undefined) => a !== undefined)

        return pinnedApplications.map((app) => {
          if (app.__internal_params.frontend) {
            return {
              displayName: app.__internal_params.displayName,
              id: app.__internal_params.id,
              endpoint: `/app/a/${app.__internal_params.id}`,
            };
          }

          return {
            displayName: app.__internal_params.displayName,
            id: app.__internal_params.id,
            url: app.__internal_params.externalFrontend?.url || "example.com",
          };
        });
      },
    );

    this.app.get("/core/panel/quick-shortcut/icon/:applicationId", async (req, res) => {
      const applicationId = (req.params as { applicationId: string }).applicationId;

      const app = this.instance.applications.loadedApplications.find((a) => a.__internal_params.id === applicationId);

      if (!app) {
        return res.status(404);
      }

      if (
        await this.instance.filesystem.doesPathExist(
          path.join(
            this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
            "panel/applications",
            app.__internal_params.id,
            "quickShortcut.webp",
          ),
        )
      ) {
        // return this.sendFile(res, path.join(app?.__internal_initializedPath, "./icon.avif"), "image/avif");
        return this.sendFile(
          res,
          path.join(
            this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
            "panel/applications",
            app.__internal_params.id,
            "quickShortcut.webp",
          ),
          "image/webp",
        );
      }

      await mkdir(path.join(this.instance.filesystem.commonPaths.GlobalCacheDirectory(), "panel/applications", app.__internal_params.id), {
        recursive: true,
      });

      await resizeImage(
        path.join(app?.__internal_initializedPath, "./assets/icon.png"),
        88,
        88,
        path.join(
          this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
          "panel/applications",
          app.__internal_params.id,
          "quickShortcut.webp",
        ),
        "webp",
      );

      return this.sendFile(
        res,
        path.join(
          this.instance.filesystem.commonPaths.GlobalCacheDirectory(),
          "panel/applications",
          app.__internal_params.id,
          "quickShortcut.webp",
        ),
        "image/webp",
      );
    });

    this.app.post(
      "/core/panel/quick-shortcuts/create",
      {
        schema: {
          body: z.object({
            id: z.string(),
          }),
          response: {
            200: z.object({
              success: z.boolean(),
            }),
          },
        },
      },
      async (req, res) => {
        const applicationId = (req.body as { id: string }).id;
        const username = this.getRequestUsername();

        if (this.instance.applications.loadedApplications.find((i) => i.__internal_params.id === applicationId)) {
          try {
            const previousPins = await this.instance.database.query(
              "SELECT pinned_applications FROM public.panel_configuration WHERE username = $1;",
              [username],
            );

            if (previousPins.rows[0].pinned_applications.includes(applicationId)) {
              return { success: false };
            }

            const newPins = [...previousPins.rows[0].pinned_applications, applicationId];

            await this.instance.database.query("UPDATE public.panel_configuration SET pinned_applications = $2 WHERE username = $1;", [
              username,
              newPins,
            ]);
            return { success: true };
          } catch (error) {
            return { success: false };
          }
        }
      },
    );

    this.app.get(
      "/core/panel",
      {
        schema: {
          response: {
            200: z.object({
              widgets: z.string().array(),
              size: z.enum(["small", "medium", "large"]),
            }),
          },
        },
      },
      async (req, res) => {
        const username = this.getRequestUsername();

        const dbquery = await this.instance.database.query("SELECT widgets, size FROM public.panel_configuration WHERE username = $1;", [
          username,
        ]);

        return {
          widgets: dbquery.rows[0].widgets,
          size: dbquery.rows[0].size,
        };
      },
    );
  }

  // start listening for requests
  // once called, no more routes may be defined
  async __internal_beginListening() {
    this.instance.log.info("request_manager", "Starting RequestManager Listening...");
    try {
      await this.app.ready();
      await this.app.listen({ port: this.instance.flags.port, host: "0.0.0.0" });
      this.instance.log.info(
        "request_manager",
        `YourDash Instance Backend Online & listening at ${this.instance.log.addEmphasisToString(`port "${this.instance.flags.port}"`)}`,
      );

      this.instance.log.info("request_manager", `Attempting to ping self`);
      fetch(`http://localhost:${this.instance.flags.port}/core/test/self-ping`)
        .then((res) => res.json())
        // @ts-ignore
        .then((data: { success?: boolean }) => {
          if (data?.success) {
            this.instance.setStatus(InstanceStatus.OK);
            return this.instance.log.success("self_ping_test", "self ping successful - The server is receiving requests");
          }

          console.log(data);
          this.instance.log.error("request_manager", "CRITICAL ERROR!, unable to ping self");
        })
        .catch(() => {
          this.instance.log.error("request_manager", "CRITICAL ERROR!, unable to ping self");
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

/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import { YourDashApplication } from "@yourdash/backend/src/applications.js";
import { type Instance } from "@yourdash/backend/src/instance.js";
import path from "path";
import { z } from "zod";

export default class Application extends YourDashApplication {
  constructor(instance: Instance) {
    super(
      {
        version: {
          major: 1,
          minor: 0,
        },
        configVersion: 1,
        credits: {
          authors: [{ name: "Ewsgit", site: "https://ewsgit.uk" }],
        },
        frontend: true,
        displayName: "Dash",
        description: "The YourDash dashboard application.",
        id: "uk-ewsgit-dash",
      },
      instance,
    );
    
    instance.database.query(`CREATE TABLE IF NOT EXISTS uk_ewsgit_dash_dashboard
                             (
                                 username                   text,
                                 header_welcome_message     text   default 'Hiya, %username%',
                                 header_size                text   default 'medium',
                                 header_font_size           float  default 4.0,
                                 header_font_weight         int    default 900,
                                 header_font_family         text,
                                 header_style               text   default 'floating',
                                 header_background_blur     float  default 0.25,
                                 header_background_opacity  float  default 0.75,
                                 background_type            text   default 'image',
                                 background_value           text,
                                 content_background_blur    float  default 0.25,
                                 content_background_opacity float  default 0.75,
                                 content_pages              json[] default array []::json[]
                             );`);

    instance.events.on("yourdash_user_repair", (username: string) => {
      instance.database.query(
        `INSERT INTO public.uk_ewsgit_dash_dashboard (username)
           SELECT $1
           WHERE NOT EXISTS (SELECT 1 FROM public.uk_ewsgit_dash_dashboard WHERE username = $1)`,
        [username],
      );
    });

    return this;
  }

  public onLoad(): this {
    this.instance.request.get(
      "/uk-ewsgit-dash/dashboard",
      {
        schema: {
          response: {
            200: z.object({
              header: z.object({
                welcomeMessage: z.string(),
                size: z.union([
                  z.literal("small"),
                  z.literal("medium"),
                  z.literal("large"),
                ]),
                style: z.union([z.literal("floating"), z.literal("docked")]),
                background: z.object({
                  blur: z.number(),
                  opacity: z.number(),
                }),
                font: z.object({
                  family: z.string().optional(),
                  weight: z.number(),
                  size: z.number(),
                }),
              }),
              background: z.union([
                z.object({
                  type: z.literal("image"),
                }),
                z.object({
                  type: z.literal("color"),
                  value: z.string(),
                }),
                z.object({
                  type: z.literal("linearGradient"),
                  value: z.string(),
                }),
                z.object({
                  type: z.literal("radialGradient"),
                  value: z.string(),
                }),
              ]),
              content: z.object({
                background: z.object({
                  blur: z.number(),
                  opacity: z.number(),
                }),
                pages: z
                  .object({
                    id: z.string(),
                    data: z.any(),
                    dimensions: z.object({
                      width: z.number(),
                      height: z.number(),
                    }),
                    position: z.object({
                      x: z.number(),
                      y: z.number(),
                    }),
                  })
                  .array(),
              }),
              user: z.object({
                username: z.string(),
                forename: z.string(),
                surname: z.string(),
              }),
            }),
          },
        },
      },
      async (req, res) => {
        const username = this.instance.requestManager.getRequestUsername();
        const userData = await this.instance.database.query(
          "SELECT forename, surname FROM public.users WHERE username = $1",
          [username],
        );
        const dashboardData = await this.instance.database.query(
          "SELECT * FROM public.uk_ewsgit_dash_dashboard WHERE username = $1",
          [username],
        );

        const data = dashboardData.rows[0];

        return {
          header: {
            welcomeMessage: data.header_welcome_message,
            size: data.header_size,
            style: data.header_style,
            background: {
              blur: data.header_background_blur, // percentage from 0% to 100%
              opacity: data.header_background_opacity,
            },
            font: {
              family: data.header_font_family || undefined,
              size: data.header_font_size,
              weight: data.header_font_weight,
            },
          },
          content: {
            background: {
              // percentage from 0rem to 4rem
              blur: data.content_background_blur, // percentage from 0% to 100%
              opacity: data.content_background_opacity,
            },
            pages: data.content_pages || [],
          },
          background: {
            type: data.background_type,
            value:
              data.background_type !== "image"
                ? data.background_value
                : undefined,
          },
          user: {
            username: username,
            forename: userData.rows[0].forename,
            surname: userData.rows[0].surname,
          },
        };
      },
    );

    this.instance.request.post(
      "/uk-ewsgit-dash/dashboard",
      {
        schema: {
          body: z.object({
            header: z.object({
              welcomeMessage: z.string(),
              size: z.union([
                z.literal("small"),
                z.literal("medium"),
                z.literal("large"),
              ]),
              style: z.union([z.literal("floating"), z.literal("docked")]),
              background: z.object({
                blur: z.number(),
                opacity: z.number(),
              }),
              font: z.object({
                family: z.string().optional(),
                weight: z.number(),
                size: z.number(),
              }),
            }),
            background: z.union([
              z.object({
                type: z.literal("image"),
              }),
              z.object({
                type: z.literal("color"),
                value: z.string(),
              }),
              z.object({
                type: z.literal("linearGradient"),
                value: z.string(),
              }),
              z.object({
                type: z.literal("radialGradient"),
                value: z.string(),
              }),
            ]),
            content: z.object({
              background: z.object({
                blur: z.number(),
                opacity: z.number(),
              }),
              pages: z
                .object({
                  id: z.string(),
                  data: z.any(),
                  dimensions: z.object({
                    width: z.number(),
                    height: z.number(),
                  }),
                  position: z.object({
                    x: z.number(),
                    y: z.number(),
                  }),
                })
                .array(),
            }),
          }),
          response: { 200: z.object({ success: z.boolean() }) },
        },
      },
      async (req, res) => {
        const username = this.instance.requestManager.getRequestUsername();
        const body = req.body as {
          header: {
            welcomeMessage: string;
            size: "small" | "medium" | "large";
            style: "floating" | "docked";
            background: {
              blur: number;
              opacity: number;
            };
            font: {
              family: string;
              weight: string;
              size: number;
            };
          };
          background:
            | {
                type: "image";
              }
            | {
                type: "color";
                value: string;
              }
            | {
                type: "linearGradient";
                value: string;
              }
            | {
                type: "radialGradient";
                value: string;
              };
          content: {
            background: {
              blur: number;
              opacity: number;
            };
            pages: {
              id: string;
              data: any;
              dimensions: {
                width: number;
                height: number;
              };
            }[];
          };
        };

        this.instance.database.query(
          `UPDATE public.uk_ewsgit_dash_dashboard
                               SET header_welcome_message     = $1,
                                   header_size                = $2,
                                   header_font_size           = $3,
                                   header_font_weight         = $4,
                                   header_font_family         = $5,
                                   header_style               = $6,
                                   header_background_blur     = $7,
                                   header_background_opacity  = $8,
                                   background_type            = $9,
                                   background_value           = $10,
                                   content_background_blur    = $11,
                                   content_background_opacity = $12,
                                   content_pages              = $13
                               WHERE username = $14`,
          [
            body.header.welcomeMessage,
            body.header.size,
            body.header.font.size,
            body.header.font.weight,
            body.header.font.family,
            body.header.style,
            body.header.background.blur,
            body.header.background.opacity,
            body.background.type,
            body.background?.type !== "image" ? body.background.value : null,
            body.content.background.blur,
            body.content.background.opacity,
            body.content.pages,
            username,
          ],
        );

        return { success: true };
      },
    );

    this.instance.request.get(
      "/uk-ewsgit-dash/backgroundImage",
      async (req, res) => {
        return this.instance.requestManager.sendFile(
          res,
          path.join(
            this.instance.filesystem.commonPaths.SystemDirectory(),
            "loginBackground.avif",
          ),
          "image/avif",
        );
      },
    );

    return super.onLoad();
  }
}

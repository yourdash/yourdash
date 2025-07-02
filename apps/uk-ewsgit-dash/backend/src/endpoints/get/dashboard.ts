import z from "zod";
import type Application from "../../index.js";

export const endpointSchema = {
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
};

export default function main(app: Application) {
  app.instance.request.get(
    "/uk-ewsgit-dash/dashboard",
    {
      schema: endpointSchema,
    },
    async (req, res) => {
      const username = app.instance.requestManager.getRequestUsername();
      const userData = await app.instance.database.query(
        "SELECT forename, surname FROM public.users WHERE username = $1",
        [username],
      );
      const dashboardData = await app.instance.database.query(
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
}

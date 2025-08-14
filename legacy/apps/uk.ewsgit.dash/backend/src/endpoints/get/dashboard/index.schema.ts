import { createEndpoint } from "@yourdash/tunnel";
import z from "zod";

export const endpointSchema = createEndpoint(
  "/uk.ewsgit.dash/dashboard",
  "GET",
  z.object({
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
          items: z
            .object({
              uuid: z.string(),
              id: z.string(),
              data: z.any(),
              dimensions: z.object({
                width: z.number(),
                height: z.number(),
              }),
            })
            .array(),
        })
        .array(),
    }),
    user: z.object({
      username: z.string(),
      forename: z.string(),
      surname: z.string(),
    }),
  }),
);

export default endpointSchema;

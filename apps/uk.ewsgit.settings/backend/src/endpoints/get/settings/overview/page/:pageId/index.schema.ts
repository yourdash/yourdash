import { createEndpoint } from "@yourdash/tunnel";
import z from "zod";

export const endpointSchema = createEndpoint(
  "/uk.ewsgit.settings/settings/overview/page/:pageId",
  "GET",
  z
    .object({
      settingId: z.string(),
      description: z.string(),
      value: z.any(),
      defaultValue: z.any(),
      settingType: z.string(),
    })
    .array(),
);

import { createEndpoint } from "@yourdash/tunnel";
import z from "zod";

export const endpointSchema = createEndpoint(
  "/uk.ewsgit.settings/setting/",
  "POST",
  z
    .object({
      settingId: z.string(),
      description: z.string(),
      value: z.any(),
      defaultValue: z.any(),
      settingType: z.string(),
    })
    .array(),
  {
    requestBody: z.object({
      id: z.string(),
      value: z.any(),
    }),
  },
);

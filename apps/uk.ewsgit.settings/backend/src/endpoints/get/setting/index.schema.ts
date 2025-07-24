import { createEndpoint } from "@yourdash/tunnel";
import z from "zod";

export const endpointSchema = createEndpoint(
  "/uk.ewsgit.settings/setting/{id}",
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
  {
    requestParams: ["id"],
  },
);

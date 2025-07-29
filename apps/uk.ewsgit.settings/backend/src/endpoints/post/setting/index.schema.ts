import { createEndpoint } from "@yourdash/tunnel";
import z from "zod";

export const endpointSchema = createEndpoint(
  "/uk.ewsgit.settings/setting/",
  "POST",
  z.object({
    value: z.any(),
  }),
  {
    requestBody: z.object({
      id: z.string(),
      value: z.any(),
    }),
  },
);

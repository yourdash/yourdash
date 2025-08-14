import { createEndpoint } from "@yourdash/tunnel";
import z from "zod";

export const endpointSchema = createEndpoint(
  "/uk.ewsgit.settings/setting/{id}",
  "GET",
  z.object({
    value: z.any().describe("The setting's current value"),
  }),
  {
    requestParams: ["id"] as const,
  },
);

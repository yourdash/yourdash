import { createEndpoint } from "@yourdash/tunnel";
import z from "zod";

export const endpointSchema = createEndpoint(
  "/uk.ewsgit.dash/backgroundImage",
  "GET",
  z.unknown(),
);

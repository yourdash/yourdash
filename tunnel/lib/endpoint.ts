import type { ZodNumber, ZodObject, ZodString } from "zod/v4";

export type YourDashBackendEndpoint = {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  request: ZodObject;
  response: ZodObject | ZodString | ZodNumber;
  run: (
    req: YourDashBackendEndpoint["request"],
  ) => YourDashBackendEndpoint["response"];
};

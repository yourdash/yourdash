import { ZodType } from "zod";

export type YourDashEndpointMethods =
  | YourDashEndpointMethodsWithoutBody
  | YourDashEndpointMethodsWithBody;
export type YourDashEndpointMethodsWithoutBody = "GET";
export type YourDashEndpointMethodsWithBody = "POST" | "PUT" | "DELETE";

export type YourDashEndpoint<
  Method extends YourDashEndpointMethods,
  ResponseType extends ZodType,
  RequestBodyType extends ZodType,
> = {
  path: string;
  method: Method;
  requestBody?: RequestBodyType;
  requestQueryString?: string[];
  response: ResponseType;
};

export function createEndpoint<
  Method extends YourDashEndpointMethods,
  ResponseType extends ZodType,
  RequestBodyType extends ZodType,
>(
  path: string,
  method: Method,
  response: ResponseType,
  extra?: {
    requestBody?: RequestBodyType;
    requestQueryString?: string[];
  },
): YourDashEndpoint<Method, ResponseType, RequestBodyType> {
  return {
    path: path,
    method: method,
    requestBody: extra?.requestBody,
    requestQueryString: extra?.requestQueryString,
    response: response,
  };
}

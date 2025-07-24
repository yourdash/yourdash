import { ZodType } from "zod";

export type YourDashEndpointMethods =
  | YourDashEndpointMethodsWithoutBody
  | YourDashEndpointMethodsWithBody;
export type YourDashEndpointMethodsWithoutBody = "GET";
export type YourDashEndpointMethodsWithBody = "POST" | "PUT" | "DELETE";

export type YourDashEndpoint<
  Method extends YourDashEndpointMethods,
  ResponseType extends ZodType,
  RequestBodyType extends ZodType | undefined,
  RequestParams extends string[],
> = {
  path: string;
  method: Method;
  requestBody?: RequestBodyType;
  requestQueryString?: string[];
  requestParams?: RequestParams;
  response: ResponseType;
};

export function createEndpoint<
  Method extends YourDashEndpointMethods,
  ResponseType extends ZodType,
  RequestBodyType extends ZodType | undefined = undefined,
  RequestParams extends string[] = [],
>(
  path: string,
  method: Method,
  response: ResponseType,
  extra?: {
    requestBody?: RequestBodyType;
    requestQueryString?: string[];
    requestParams?: RequestParams;
  },
): YourDashEndpoint<Method, ResponseType, RequestBodyType, RequestParams> {
  return {
    path: path,
    method: method,
    requestBody: extra?.requestBody,
    requestQueryString: extra?.requestQueryString,
    response: response,
  };
}

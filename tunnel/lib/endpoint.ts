import type {FastifySchema} from "fastify";

export type YourDashEndpointMethods = YourDashEndpointMethodsWithoutBody | YourDashEndpointMethodsWithBody
export type YourDashEndpointMethodsWithoutBody = "GET"
export type YourDashEndpointMethodsWithBody = "POST" | "PUT" | "DELETE"

export type YourDashEndpoint<Method extends YourDashEndpointMethods = YourDashEndpointMethods> = {
  path: string;
  method: Method;
  requestBody?: FastifySchema[ "body" ];
  requestQueryString?: FastifySchema[ "querystring" ];
  requestParameters?: FastifySchema[ "params" ];
  requestHeaders?: FastifySchema[ "headers" ];
  response: FastifySchema[ "response" ];
};
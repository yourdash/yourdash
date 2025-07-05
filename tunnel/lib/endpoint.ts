import type {FastifySchema} from "fastify";

export type YourDashEndpointMethods = "GET" | YourDashEndpointMethodsWithBody
export type YourDashEndpointMethodsWithBody = "POST" | "PUT" | "DELETE"

export type YourDashEndpoint<Method extends YourDashEndpointMethods> = {
  path: string;
  method: Method;
  requestBody: Method extends YourDashEndpointMethodsWithBody ? FastifySchema[ "body" ] : unknown;
  requestQueryString: FastifySchema[ "querystring" ];
  requestParameters: FastifySchema[ "params" ];
  requestHeaders: FastifySchema[ "headers" ];
  response: FastifySchema[ "response" ];
};
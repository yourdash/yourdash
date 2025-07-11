/*
 * Copyright ©2025 Ewsgit <https://ewsgit.uk> and YourDash <https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import z, { ZodObject, ZodString } from "zod";
import type { YourDashEndpoint, YourDashEndpointMethods } from "./endpoint";
import { ZodType } from "zod";

export type TunnelResponseType = "text" | "json" | "uint8" | "bytes";

async function performLegacyFetch<ResponseDataType>(
  basePath: string,
  path: string,
  method: string,
  responseType: TunnelResponseType,
  headers?: { [key: string]: string },
  body?: string,
): Promise<{
  data: ResponseDataType;
  status: number;
  error: boolean;
  response: Response;
}> {
  console.log(`${method} ${path}`, body || "");
  const response = await fetch(basePath + path, {
    method: method,
    body: body,
    headers: { ...headers, "Content-Type": "application/json" },
    credentials: "include",
  });

  if (
    response.status !== 200 &&
    response.status !== 201 &&
    response.status !== 202 &&
    response.status !== 204
  ) {
    throw { status: response.status, error: true, response };
  }

  switch (responseType) {
    case "json":
      return {
        data: (await response.json()) as ResponseDataType,
        status: response.status,
        error: false,
        response,
      };
    case "text":
      return {
        data: (await response.text()) as ResponseDataType,
        status: response.status,
        error: false,
        response,
      };
    case "bytes":
    case "uint8":
      // @ts-ignore
      return {
        data: (await response.bytes()) as ResponseDataType,
        status: response.status,
        error: false,
        response,
      };
  }
}
async function performFetch<
  Endpoint extends YourDashEndpoint<YourDashEndpointMethods, ZodType, ZodType>,
>(
  basePath: string,
  endpoint: Endpoint,
  extras: {
    body?: Endpoint["requestBody"];
    queryParameters?: Endpoint["requestQueryString"] extends undefined
      ? undefined
      : Record<keyof Endpoint["requestQueryString"], string>;
    noCache?: boolean;
  },
): Promise<{
  data: Endpoint["response"]["_output"];
  status: number;
  statusText: string;
  endpoint: Endpoint;
}> {
  let body: object | string = extras.body || "";

  if (typeof body === "object") {
    body = JSON.stringify(body);
  }

  let queryParameters =
    "?" +
    Object.keys(extras.queryParameters || {})
      .map((k) => {
        // @ts-expect-error this will always exist if this point in the code was reached
        return `${k}=${extras.queryParameters[k]}`;
      })
      .join("&");

  if (queryParameters === "?") queryParameters = "";

  let fet = await fetch(basePath + endpoint.path + queryParameters, {
    method: endpoint.method,
    body: body !== "" ? JSON.stringify(body) : undefined,
    credentials: "include",
    cache: extras.noCache ? "no-cache" : "default",
  });

  let response: {
    status: number;
    statusText: string;
    endpoint: Endpoint;
  } = {
    status: fet.status,
    statusText: fet.statusText,
    endpoint: endpoint,
  };

  // @ts-expect-error typescript goofiness
  if (endpoint.response._def.typeName === "ZodString") {
    return {
      ...response,
      data: await fet.text(),
    } as const;
  }

  // @ts-expect-error typescript goofiness
  if (endpoint.response._def.typeName === "ZodObject") {
    return {
      ...response,
      data: await fet.json(),
    } as const;
  }

  return {
    ...response,
    data: await fet.bytes(),
  } as const;
}

class Tunnel {
  baseURL: string;

  constructor() {
    this.baseURL = "";
    return this;
  }

  setBaseURL(baseInstanceURL: string) {
    console.log(`Connecting to instance @ "${baseInstanceURL}"`);
    this.baseURL = baseInstanceURL;
    localStorage.setItem("instance_url", baseInstanceURL);
    return this;
  }

  async send<
    Endpoint extends YourDashEndpoint<
      YourDashEndpointMethods,
      ZodType,
      ZodType
    >,
  >(
    endpoint: Endpoint,
    extras?: {
      body?: Endpoint["requestBody"] extends undefined
        ? undefined
        : Endpoint["requestBody"];
      queryParameters?: Endpoint["requestQueryString"] extends undefined
        ? undefined
        : Record<keyof Endpoint["requestQueryString"], string>;
      noCache?: boolean;
    },
  ) {
    let fet = await performFetch<Endpoint>(
      this.baseURL,
      endpoint,
      extras || {},
    );

    return fet;
  }

  async get<S extends ZodType>(
    path: string,
    responseType: TunnelResponseType,
    responseSchema: S,
  ): Promise<{
    data: S["_output"];
    status: number;
    error: boolean;
    response: Response;
  }> {
    return await performLegacyFetch<S["_output"]>(
      this.baseURL,
      path,
      "GET",
      responseType,
    );
  }

  async post<S extends ZodType>(
    path: string,
    body: object,
    responseType: TunnelResponseType,
    responseSchema: S,
  ): Promise<{
    data: S["_output"];
    status: number;
    error: boolean;
    response: Response;
  }> {
    return await performLegacyFetch<S["_output"]>(
      this.baseURL,
      path,
      "POST",
      responseType,
      {},
      JSON.stringify(body),
    );
  }

  async put<S extends ZodType>(
    path: string,
    body: string,
    responseType: TunnelResponseType,
    responseSchema: S,
  ): Promise<{
    data: S["_output"];
    status: number;
    error: boolean;
    response: Response;
  }> {
    return await performLegacyFetch<S["_output"]>(
      this.baseURL,
      path,
      "PUT",
      responseType,
      {},
      body,
    );
  }

  async delete<S extends ZodType>(
    path: string,
    responseType: TunnelResponseType,
    responseSchema: S,
  ): Promise<{
    data: S["_output"];
    status: number;
    error: boolean;
    response: Response;
  }> {
    return await performLegacyFetch<S["_output"]>(
      this.baseURL,
      path,
      "DELETE",
      responseType,
      {},
    );
  }
}

const tun = new Tunnel();

export default tun;

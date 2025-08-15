import * as tRPCExpress from '@trpc/server/adapters/express';

export function createContext({ req, res }: tRPCExpress.CreateExpressContextOptions) {
  return { req, res };
}

export type Context = Awaited<
  ReturnType<typeof createContext> & { username: string; sessionToken: string }
>;

import { initTRPC } from "@trpc/server";
import { z } from "zod";

export const t = initTRPC.create();

export const appRouter = t.router({
  sample: t.procedure.query(async (options) => {
    return {
      foo: "bar",
    };
  }),
});

export type AppRouter = typeof appRouter;

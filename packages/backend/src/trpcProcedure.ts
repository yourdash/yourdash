import { TRPCError } from "@trpc/server";
import { instance } from "./index.js";

const procedure = instance.requestManager.tRPC.procedure.use(async (options) => {
  try {
    const authorization =
      (
        options.ctx as { req: { headers: { cookie: string } } }
      ).req.headers.cookie
        .split(";")
        ?.map((cookie) => cookie.split("="))
        ?.find((cookie) => cookie[0] === "authorization")?.[1] || "";

    if (!authorization || authorization === "")
      throw new TRPCError({ code: "UNAUTHORIZED" });

    const [username, sessionToken] = authorization.split(" ");

    if (
      !(await instance.authorization.authorizeUser(
        username,
        `${username} ${sessionToken}`,
      ))
    ) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    return options.next({
      // @ts-ignore
      username: username,
      sessionToken: sessionToken,
    });
  } catch (err) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
});

export default procedure;

// Note: this should rarely be used, be sure this functionality should be PUBLICLY AVAILABLE before using this api, perhaps refer to `procedure` instead
export const publicProcedure = instance.requestManager.tRPC.procedure;

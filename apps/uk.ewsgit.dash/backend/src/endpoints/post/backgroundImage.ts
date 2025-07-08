import path from "path";
import type Application from "../../index.js";
import { endpointSchema } from "./backgroundImage.schema.js";

export default function main(app: Application) {
  app.instance.requestManager.createEndpoint(
    endpointSchema,
    async (req, res) => {
      return app.instance.requestManager.sendFile(
        res,
        path.join(
          app.instance.filesystem.commonPaths.SystemDirectory(),
          "loginBackground.avif",
        ),
        "image/avif",
      );
    },
  );
}

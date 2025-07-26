import type Application from "../../../index.js";
import { endpointSchema } from "./index.schema.js";

export default function main(app: Application) {
  app.instance.requestManager.createEndpoint(
    endpointSchema,
    async (req, res) => {
      console.log("HMMM");

      return res.send([{ ok: "true" }]);
    },
  );
}

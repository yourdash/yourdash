import type Application from "../../../../index.js";
import { endpointSchema } from "./index.schema.js";

export default function main(app: Application) {
  app.instance.requestManager.createEndpoint(
    endpointSchema,
    async (req, res) => {
      let { id } = req.params as { id: string };

      let settingValue = (
        await app.instance.database.query(
          "SELECT value FROM uk_ewsgit_settings_user WHERE username = $1 AND setting_key = $2",
          [app.instance.requestManager.getRequestUsername(), id],
        )
      ).rows[0];

      return res.send({
        value: settingValue,
      });
    },
  );
}

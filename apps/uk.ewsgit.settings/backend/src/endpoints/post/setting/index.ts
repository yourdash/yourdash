import { endpointSchema } from "./index.schema.js";
import Application from "../../../index.js";

export default function main(app: Application) {
  app.instance.requestManager.createEndpoint(
    endpointSchema,
    async (req, res) => {
      console.log("Hmm");
      console.debug(req.body);

      const { id, value } = req.body as { id: string; value: any };

      await app.instance.database.query(
        "UPDATE uk_ewsgit_settings_user SET value = $1 WHERE username = $2 AND setting_key = $3",
        [
          value || app.settings.find((s) => s.id === id)?.defaultValue,
          app.instance.requestManager.getRequestUsername(),
          id,
        ],
      );

      return res.send({
        value: value,
      });
    },
  );
}

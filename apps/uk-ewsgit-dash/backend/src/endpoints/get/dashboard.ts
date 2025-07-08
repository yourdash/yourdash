import type Application from "../../index.js";
import endpointSchema from "./dashboard.schema.js";


export default function main(app: Application) {
  console.log("Was called!");

  app.instance.requestManager.createEndpoint(
    endpointSchema,
    async (req, res) => {
      const username = app.instance.requestManager.getRequestUsername();
      const userData = await app.instance.database.query(
        "SELECT forename, surname FROM public.users WHERE username = $1",
        [username],
      );
      const dashboardData = await app.instance.database.query(
        "SELECT * FROM public.uk_ewsgit_dash_dashboard WHERE username = $1",
        [username],
      );

      const data = dashboardData.rows[0];

      return {
        header: {
          welcomeMessage: data.header_welcome_message,
          size: data.header_size,
          style: data.header_style,
          background: {
            blur: data.header_background_blur, // percentage from 0% to 100%
            opacity: data.header_background_opacity,
          },
          font: {
            family: data.header_font_family || undefined,
            size: data.header_font_size,
            weight: data.header_font_weight,
          },
        },
        content: {
          background: {
            // percentage from 0rem to 4rem
            blur: data.content_background_blur, // percentage from 0% to 100%
            opacity: data.content_background_opacity,
          },
          pages: data.content_pages || [],
        },
        background: {
          type: data.background_type,
          value:
            data.background_type !== "image"
              ? data.background_value
              : undefined,
        },
        user: {
          username: username,
          forename: userData.rows[0].forename,
          surname: userData.rows[0].surname,
        },
      };
    },
  );
}

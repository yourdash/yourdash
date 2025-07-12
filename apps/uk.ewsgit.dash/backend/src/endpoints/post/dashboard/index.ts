import type Application from "../../../index.js";
import { endpointSchema } from "./index.schema.js";

export default function main(app: Application) {
  app.instance.requestManager.createEndpoint(
    endpointSchema,
    async (req, res) => {
      const username = app.instance.requestManager.getRequestUsername();
      const body = req.body as {
        header: {
          welcomeMessage: string;
          size: "small" | "medium" | "large";
          style: "floating" | "docked";
          background: {
            blur: number;
            opacity: number;
          };
          font: {
            family: string;
            weight: string;
            size: number;
          };
        };
        background:
          | {
              type: "image";
            }
          | {
              type: "color";
              value: string;
            }
          | {
              type: "linearGradient";
              value: string;
            }
          | {
              type: "radialGradient";
              value: string;
            };
        content: {
          background: {
            blur: number;
            opacity: number;
          };
          pages: {
            id: string;
            data: any;
            dimensions: {
              width: number;
              height: number;
            };
          }[];
        };
      };

      app.instance.database.query(
        `UPDATE public.uk_ewsgit_dash_dashboard
                     SET header_welcome_message     = $1,
                         header_size                = $2,
                         header_font_size           = $3,
                         header_font_weight         = $4,
                         header_font_family         = $5,
                         header_style               = $6,
                         header_background_blur     = $7,
                         header_background_opacity  = $8,
                         background_type            = $9,
                         background_value           = $10,
                         content_background_blur    = $11,
                         content_background_opacity = $12,
                         content_pages              = $13
                     WHERE username = $14`,
        [
          body.header.welcomeMessage,
          body.header.size,
          body.header.font.size,
          body.header.font.weight,
          body.header.font.family,
          body.header.style,
          body.header.background.blur,
          body.header.background.opacity,
          body.background.type,
          body.background?.type !== "image" ? body.background.value : null,
          body.content.background.blur,
          body.content.background.opacity,
          body.content.pages,
          username,
        ],
      );

      return { success: true };
    },
  );
}

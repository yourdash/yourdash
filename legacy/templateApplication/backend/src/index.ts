/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import { YourDashApplication } from "@yourdash/backend/src/applications.js";
import { type Instance } from "@yourdash/backend/src/instance.js";
import WidgetsCommand from "./commands/widgets.js";
import { YourDashInstanceEvents } from "@yourdash/backend/src/event.js";

export default class Application extends YourDashApplication {
  constructor(instance: Instance) {
    super(
      {
        version: {
          major: 1,
          minor: 0,
        },
        configVersion: 1,
        credits: {
          authors: [{ name: "Ewsgit", site: "https://ewsgit.uk" }],
        },
        frontend: true,
        displayName: "Dash",
        description: "The YourDash dashboard application.",
        id: "uk.ewsgit.dash",
      },
      instance,
    );

    instance.database.query(`CREATE TABLE IF NOT EXISTS uk_ewsgit_dash_dashboard
                             (
                                 username                   text,
                                 header_welcome_message     text   default 'Hiya, %username%',
                                 header_size                text   default 'medium',
                                 header_font_size           float  default 4.0,
                                 header_font_weight         int    default 900,
                                 header_font_family         text,
                                 header_style               text   default 'floating',
                                 header_background_blur     float  default 0.25,
                                 header_background_opacity  float  default 0.75,
                                 background_type            text   default 'image',
                                 background_value           text,
                                 content_background_blur    float  default 0.25,
                                 content_background_opacity float  default 0.75,
                                 content_pages              jsonb[] default array []::jsonb[]
                             );`);

    instance.events.on(YourDashInstanceEvents.VerifyUser, (username: string) => {
      instance.database.query(
        `INSERT INTO public.uk_ewsgit_dash_dashboard (username)
           SELECT $1
           WHERE NOT EXISTS (SELECT 1 FROM public.uk_ewsgit_dash_dashboard WHERE username = $1)`,
        [username],
      );
    });

    return this;
  }

  public async onLoad(): Promise<this> {
    await super.onLoad();

    this.instance.commandManager.commands.push(
      new WidgetsCommand(this.instance),
    );

    return this;
  }
}

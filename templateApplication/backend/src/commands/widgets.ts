import Command, {
  CommandArguments,
  CommandFlags,
  ICommandRuntimeParameters,
} from "@yourdash/backend/src/commandManager/command.js";

export default class WidgetsCommand extends Command {
  commandId = "dash.widgets";
  flags: CommandFlags = {};
  arguments: CommandArguments = [];
  shortDescription =
    "Manage uk.ewsgit.dash's widgets for the admin user (development command)";

  async run(parameters: ICommandRuntimeParameters) {
    type page = {
      id: string;
      items: {
        uuid: string;
        id: string;
        data: object;
        dimensions: {
          width: number;
          height: number;
        };
      }[];
    };

    let data: page[] = [
      {
        id: "1",
        items: [
          {
            data: {
              url: "https://yourdash.ewsgit.uk",
              icon: "/assets/productLogos/yourdash.svg",
              name: "YourDash",
            },
            dimensions: {
              width: 1,
              height: 1,
            },
            id: "applicationShortcut",
            uuid: "random-uuid-string-idk",
          },
          {
            data: {
              url: "https://yourdash.ewsgit.uk",
              icon: "/assets/productLogos/yourdash.svg",
              name: "YourDash",
            },
            dimensions: {
              width: 1,
              height: 1,
            },
            id: "applicationShortcut",
            uuid: "random-uuid-string-idk2",
          },
        ],
      },
    ];

    await this.instance.database.query(
      "UPDATE public.uk_ewsgit_dash_dashboard SET content_pages = $1 WHERE username = 'admin'",
      [data],
    );

    return this.finishRun();
  }
}

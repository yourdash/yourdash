import Command, { type ICommandRuntimeParameters } from "../command";
import User from "../../userManager/user.ts";

export default class UsersCommand extends Command {
  commandId = "users";
  flags = {};
  arguments = [
    { argumentId: "subcommand", allowedValues: ["list", "remove", "create"] },
  ];
  shortDescription = "Manage YourDash users";

  async run(parameters: ICommandRuntimeParameters) {
    if (!parameters.arguments["subcommand"]) {
      this.instance.log.error("command_user", "Please provide a subcommand");

      return this.finishRun();
    }

    switch (parameters.arguments["subcommand"]) {
      case "list":
        let query = await this.instance.database.query(
          "SELECT user_id, username, forename, surname FROM public.users ORDER BY user_id;",
        );

        for (const row of query.rows) {
          this.instance.log.info(
            "command_users",
            `${row.user_id}:${row.username} (${row.forename} ${row.surname}),`,
          );
        }

        return this.finishRun();
      case "create":
        this.instance.log.info(
          "command_users",
          this.instance.log.createBanner(`User creation wizard`),
        );
        this.instance.log.info("command_users", `username -> `);

        let username = "";
        let password = "";
        let forename = "";
        let surname = "";

        this.instance.commandManager.currentCommandInterface.cb = async (
          data,
        ) => {
          if (username === "") {
            username = data.trim();
            this.instance.log.info("command_users", `Password -> `);

            return;
          }

          if (password === "") {
            password = data.trim();
            this.instance.log.info("command_users", `Forename -> `);

            return;
          }

          if (forename === "") {
            forename = data.trim();
            this.instance.log.info("command_users", `Surname -> `);

            return;
          }

          if (surname === "") {
            surname = data.trim();

            this.instance.log.info("command_users", `Creating user...`);

            // create the user here
            const user = new User(username);

            if (!(await user.doesExist())) {
              const adminUser =
                await this.instance.userManager.createUser(username);
              await adminUser.setForename(forename);
              await adminUser.setSurname(surname);
              await this.instance.authorization.setUserPassword(
                username,
                password,
              );

              this.instance.log.info(
                "command_users",
                `Created user '${this.instance.log.addEmphasisToString(user.username)}'...`,
              );
            } else {
              this.instance.log.info(
                "command_users",
                `User already exists with the username '${this.instance.log.addEmphasisToString(user.username)}'`,
              );
            }

            return this.finishRun();
          }
        };

        return this.continueRun();
      default:
        this.instance.log.error(
          "command_users",
          `Invalid subcommand '${parameters.arguments["subcommand"]}'. Allowed values: '${this.arguments.find((arg) => arg.argumentId === "subcommand")?.allowedValues.join("', '")}'`,
        );
        return this.finishRun();
    }
  }
}

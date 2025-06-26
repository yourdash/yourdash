import { Args, Command, Flags } from "@oclif/core";

export default class Init extends Command {
  static override args = {
    file: Args.string({ description: "file to read" }),
  };
  static override description = "initialize a new YourDash instance";
  static override examples = ["<%= config.bin %> <%= command.id %>"];
  static override flags = {
    // flag with no value (-f, --force)
    force: Flags.boolean({
      char: "f",
      description:
        "initialize a new instance even if one exists (wipes all data)",
    }),
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({ char: "n", description: "name of the instance" }),
  };

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Init);

    this.log(
      `hello ${flags.name} from /home/ewsgit/Projects/yourdash/instanceManager/src/commands/init.ts`,
    );
  }
}

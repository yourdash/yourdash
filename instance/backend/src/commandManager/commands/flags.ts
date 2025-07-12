import Command, {
  type CommandArguments,
  type ICommandRuntimeParameters,
} from "../command";
import { YourDashFeatureFlags } from "../../types/configuration.ts";

export default class FlagsCommand extends Command {
  commandId = "flags";
  flags = {};
  arguments: CommandArguments = [
    {
      argumentId: "action",
      allowedValues: ["list", "enable", "disable"],
    },
    {
      argumentId: "flag",
    },
  ];
  shortDescription = "Terminate the YourDash instance";

  async run(parameters: ICommandRuntimeParameters) {
    switch (parameters.arguments["action"]) {
      case "list":
        const features = this.instance.configurationManager.getAllFeatures();

        for (const feat of Object.keys(features)) {
          this.instance.log.info(
            "command_flags",
            // @ts-ignore
            `${feat} -> ${this.instance.log.addEmphasisToString(this.instance.configurationManager.hasFeature(YourDashFeatureFlags[feat]) ? "enabled" : "disabled")}`,
          );
        }

        break;
      case "disable":
        let flag = parameters.arguments[
          "flag"
        ] as keyof typeof YourDashFeatureFlags;

        if (YourDashFeatureFlags[flag]) {
          await this.instance.configurationManager.disableFeature(
            YourDashFeatureFlags[flag],
          );
        } else {
          this.instance.log.error(
            "command_flags",
            `Unable to find the feature ${flag}`,
          );
        }

        break;
      default:
        this.instance.log.error(
          "command_flags",
          `Invalid subcommand '${parameters.arguments["subcommand"]}'. Allowed values: '${this.arguments.find((arg) => arg.argumentId === "action")?.allowedValues?.join("', '")}'`,
        );
    }

    return this.finishRun();
  }
}

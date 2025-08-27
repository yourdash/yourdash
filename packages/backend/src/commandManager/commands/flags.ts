import Command, { type ICommandRuntimeParameters } from "../command.js";
import { YourDashFeatureFlags } from "../../types/configuration.ts";

export default class FlagsCommand extends Command {
  commandId = "flags";
  flags = {};
  shortDescription = "Terminate the YourDash instance";

  async run(parameters: ICommandRuntimeParameters) {
    switch (parameters.arguments[0]) {
      case "list": {
        const features = this.instance.configurationManager.getAllFeatures();

        for (const feat of Object.keys(features)) {
          this.instance.log.info(
            "command_flags",
            // @ts-ignore
            `${feat} -> ${this.instance.log.addEmphasisToString(this.instance.configurationManager.hasFeature(YourDashFeatureFlags[feat]) ? "enabled" : "disabled")}`,
          );
        }

        break;
      }
      case "disable": {
        let flag = parameters.arguments[1] as keyof typeof YourDashFeatureFlags;

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
      }
      case "enable": {
        let flag = parameters.arguments[1] as keyof typeof YourDashFeatureFlags;

        if (YourDashFeatureFlags[flag]) {
          await this.instance.configurationManager.enableFeature(
            YourDashFeatureFlags[flag],
          );
        } else {
          this.instance.log.error(
            "command_flags",
            `Unable to find the feature ${flag}`,
          );
        }

        break;
      }
      default:
        this.instance.log.error(
          "command_flags",
          `Invalid subcommand '${parameters.arguments[0]}'. Allowed values: 'list', 'enable', 'disable'`,
        );
    }

    return this.finishRun();
  }
}

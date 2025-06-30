/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import { YourDashApplication } from "@yourdash/backend/src/applications.js";
import { Instance } from "@yourdash/backend/src/instance.js";
import { z } from "zod";

export default class Application extends YourDashApplication {
  settings: {
    category: string;
    defaultValue: string | number | boolean | string[];
    key: string;
  }[] = [];

  constructor(instance: Instance) {
    super({
      version: {
        major: 1,
        minor: 0,
      },
      configVersion: 1,
      credits: {
        authors: [{ name: "Ewsgit", site: "https://ewsgit.uk" }],
      },
      frontend: true,
      displayName: "Settings",
      description: "The YourDash settings application.",
      id: "uk-ewsgit-settings",
    }, instance);

    instance.database.query(`CREATE TABLE IF NOT EXISTS uk_ewsgit_settings_user
                             (
                                 setting_key text,
                                 username    text default '',
                                 value       text default ''
                             );`);

    return this;
  }

  public onLoad(): this {
    this.instance.request.get(
      "/uk-ewsgit-settings/settings/overview/page/:pageId",
      {
        schema: {
          response: {
            200: z
              .object({
                settingId: z.string(),
                description: z.string(),
                value: z.any(),
                defaultValue: z.any(),
                settingType: z.string(),
              })
              .array(),
          },
        },
      },
      async (req, res) => {
        function randomSetting(): { settingId: string } {
          function generateRandomWord(
            minLength: number = 5,
            maxLength: number = 10,
          ): string {
            const vowels = "aeiou";
            const consonants = "bcdfghjklmnpqrstvwxyz";
            const length =
              Math.floor(Math.random() * (maxLength - minLength + 1)) +
              minLength;
            let word = "";
            let useVowel = Math.random() < 0.5; // Start with vowel or consonant randomly

            for (let i = 0; i < length; i++) {
              if (useVowel) {
                word += vowels[Math.floor(Math.random() * vowels.length)];
              } else {
                word +=
                  consonants[Math.floor(Math.random() * consonants.length)];
              }
              useVowel = !useVowel; // Alternate between vowel and consonant
            }

            return word;
          }

          return {
            settingId: `${generateRandomWord()}.${generateRandomWord()}.${generateRandomWord()}`,
          };
        }

        return [
          randomSetting(),
          randomSetting(),
          randomSetting(),
          randomSetting(),
          randomSetting(),
          randomSetting(),
          randomSetting(),
        ];
      },
    );

    return super.onLoad();
  }
}

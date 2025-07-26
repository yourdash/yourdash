import type Application from "../../../../../../index.js";
import { endpointSchema } from "./index.schema.js";

export default function main(app: Application) {
  app.instance.requestManager.createEndpoint(
    endpointSchema,
    async (req, res) => {
      function randomSetting(): { settingId: string } {
        function generateRandomWord(
          minLength: number = 5,
          maxLength: number = 10,
        ): string {
          const vowels = "aeiou";
          const consonants = "bcdfghjklmnpqrstvwxyz";
          const length =
            Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
          let word = "";
          let useVowel = Math.random() < 0.5; // Start with vowel or consonant randomly

          for (let i = 0; i < length; i++) {
            if (useVowel) {
              word += vowels[Math.floor(Math.random() * vowels.length)];
            } else {
              word += consonants[Math.floor(Math.random() * consonants.length)];
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
}

import OpenAI from "openai";

import "dotenv/config";
const openaiApiKey = process.env.OPENAI_API_KEY;

async function main() {
  // Initiate the OpenAI client with your API key
  const openai = new OpenAI(openaiApiKey);

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: `you are a assistant that creates color palettes based on the user input. The user gives you a theme, be it just a word or describes a scene and you find 5 colors fitting to that input. You response only with JSON format that includes the input as the base with an emoji that represents the user input. The emoji should be on top level for the whole scene. Followed by the 5 colors as hex, rgb, a description of the what the color represent and a name for the color.
 
        Base output:
        "theme": string,
        "emoji": string,
        "colors": [
        [
            {
              "hex": string,
              "rgb": string
              "description": string,
              "name": string
            },
        {
              "hex": string,
              "rgb": string
              "description": string,
              "name": string
            },
        {
              "hex": string,
              "rgb": string
              "description": string,
              "name": string
            },
        {
              "hex": string,
              "rgb": string
              "description": string,
              "name": string
            },
        {
              "hex": string,
              "rgb": string
              "description": string,
              "name": string
            }
        ]` },
        { role: "user", content: "cinema" },
      ],
      model: "gpt-3.5-turbo",
    });

    // console.log(completion.choices[0]);
    console.log(completion.choices[0].message.content);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();

const axios = require("axios");

export const handler = async (event, context) => {
  const baseURL = "https://api.openai.com/v1/chat/completions";
  const API_KEY = process.env.OPENAI_API_KEY;

  const contentVar = JSON.parse(event.body);

  try {
    console.log("Call API");
    const response = await axios.post(
      baseURL,
      {
        model: "gpt-3.5-turbo",
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content: `You are an assistant tasked with generating color palettes based on user input. Users provide you with a theme, which could be a single word or a description of a scene, along with multiple aspects to consider. You're responsible for finding 5 colors that fit those aspects. Your response should be in JSON format, structured as follows:
        
                      {
                        "theme": {
                          "input": "user's input",
                          "emojis": ["emoji1", "emoji2", "emoji3"]
                        },
                        "colors": [
                          {
                            "hex": "#xxxxxx",
                            "rgb": "rgb(x, x, x)",
                            "description": "Description of what the color represents",
                            "name": "Color name"
                          },
                          {
                            "hex": "#xxxxxx",
                            "rgb": "rgb(x, x, x)",
                            "description": "Description of what the color represents",
                            "name": "Color name"
                          },
                          {
                            "hex": "#xxxxxx",
                            "rgb": "rgb(x, x, x)",
                            "description": "Description of what the color represents",
                            "name": "Color name"
                          },
                          {
                            "hex": "#xxxxxx",
                            "rgb": "rgb(x, x, x)",
                            "description": "Description of what the color represents",
                            "name": "Color name"
                          },
                          {
                            "hex": "#xxxxxx",
                            "rgb": "rgb(x, x, x)",
                            "description": "Description of what the color represents",
                            "name": "Color name"
                          }
                        ]
                      }`,
          },
          {
            role: "user",
            content: contentVar.theme, //passed from GeneratePalette.jsx
          },
        ],
        temperature: 1,
        max_tokens: 850,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // define incoming Data
    const newPalette = JSON.parse(response.data.choices[0].message.content);

    console.log("Usage:", response.data.usage.total_tokens, "tokens");
    console.log(response.data.choices[0].message.content);
    console.log("Type:", typeof response.data.choices[0].message.content)

    return {
      statusCode: 200,
      body: JSON.stringify({
        info: response.data.choices[0].message.content,
      }),
    };

    
  } catch (error) {
    console.error("Error during API call: ", error);
    return {
      statusCode: 500,
    };
  }


};

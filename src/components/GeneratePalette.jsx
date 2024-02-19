import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "react-daisyui";

export const GeneratePalette = () => {
  const baseURL = "https://api.openai.com";
  const [theme, setTheme] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        baseURL + "/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
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
              content: theme,
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
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      // define incoming Data
      const newPalette = JSON.parse(response.data.choices[0].message.content);

      console.log("Usage:", response.data.usage.total_tokens, "tokens");
      console.log(response.data.choices[0].message.content);

      // write to palettes API endpoint
      axios
        .post("https://huetopia-api.adaptable.app/palettes", newPalette)
        .then((res) => {
          console.log("Success writing to API Endpoint:", res);
          // reset input
          setTheme("");
          navigate(`/palettes/${res.data.id}`);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.error("Error during API call: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        id="message"
        value={theme}
        required
        onChange={(e) => setTheme(e.target.value)}
      />
      {/* <button type="submit">Submit</button> */}
      <Button className="bg-gray-800 text-white" type="submit">
        Click me!
      </Button>
    </form>
  );
};

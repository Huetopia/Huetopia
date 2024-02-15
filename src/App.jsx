import { useState, useEffect } from "react";
import "./App.css";
import OpenAI from "openai";
import axios from "axios";

const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;
const openai = new OpenAI(import.meta.env.VITE_OPENAI_API_KEY);

function App() {
  const [theme, setTheme] = useState("");

  const submithandler = async (event) => {
    event.preventDefault();

    console.log("Submitting...");
    //define the prompt
    const prompt = [
      {
        role: "system",
        content:
          'You are an assistant tasked with generating color palettes based on user input. Users provide you with a theme, which could be a single word or a description of a scene, and you\'re responsible for finding 5 colors that fit that input. Your response should be in JSON format, structured as follows:\n \n\n{\n  "theme": {\n    "input": "user\'s input",\n    "emoji": "emoji representing the user\'s input"\n  },\n  "colors": [\n    {\n      "hex": "#xxxxxx",\n      "rgb": "rgb(x, x, x)",\n      "description": "Description of what the color represents",\n      "name": "Color name"\n    },\n    {\n      "hex": "#xxxxxx",\n      "rgb": "rgb(x, x, x)",\n      "description": "Description of what the color represents",\n      "name": "Color name"\n    },\n    {\n      "hex": "#xxxxxx",\n      "rgb": "rgb(x, x, x)",\n      "description": "Description of what the color represents",\n      "name": "Color name"\n    },\n    {\n      "hex": "#xxxxxx",\n      "rgb": "rgb(x, x, x)",\n      "description": "Description of what the color represents",\n      "name": "Color name"\n    },\n    {\n      "hex": "#xxxxxx",\n      "rgb": "rgb(x, x, x)",\n      "description": "Description of what the color represents",\n      "name": "Color name"\n    }\n  ]\n}\n',
      },
      {
        role: "user",
        content: theme, // theme is a variable holding the user's input
      },
    ];

    axios
      .post(
        openai.chat.completions.create,
        {
          model: "gpt-3.5-turbo",
          messages: prompt,
          temperature: 1,
          max_tokens: 300,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`, // Use openaiApiKey instead of process.env.OPENAI_API_KEY
          },
        }
      )
      .then((response) => {
        console.log("Success");
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form onSubmit={submithandler}>
        <label>
          <input
            type="text"
            name="theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          />
          <button>Submit</button>
        </label>
      </form>

      <p></p>
    </>
  );
}

export default App;

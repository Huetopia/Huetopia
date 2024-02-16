// src/ChatInput.js
import React, { useState } from 'react';
import axios from 'axios';

const baseURL = 'https://api.openai.com';

function App() {
  const [theme, setTheme] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const response = await axios.post(baseURL + '/v1/chat/completions', {
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "system",
            "content": "You are an assistant tasked with generating color palettes based on user input. Users provide you with a theme, which could be a single word or a description of a scene, along with multiple aspects to consider. You're responsible for finding 5 colors that fit those aspects. Your response should be in JSON format, structured as follows:\n\n{\n  \"theme\": {\n    \"input\": \"user's input\",\n    \"emojis\": [\"emoji1\", \"emoji2\", \"emoji3\"]\n  },\n  \"colors\": [\n    {\n      \"hex\": \"#xxxxxx\",\n      \"rgb\": \"rgb(x, x, x)\",\n      \"description\": \"Description of what the color represents\",\n      \"name\": \"Color name\"\n    },\n    {\n      \"hex\": \"#xxxxxx\",\n      \"rgb\": \"rgb(x, x, x)\",\n      \"description\": \"Description of what the color represents\",\n      \"name\": \"Color name\"\n    },\n    {\n      \"hex\": \"#xxxxxx\",\n      \"rgb\": \"rgb(x, x, x)\",\n      \"description\": \"Description of what the color represents\",\n      \"name\": \"Color name\"\n    },\n    {\n      \"hex\": \"#xxxxxx\",\n      \"rgb\": \"rgb(x, x, x)\",\n      \"description\": \"Description of what the color represents\",\n      \"name\": \"Color name\"\n    },\n    {\n      \"hex\": \"#xxxxxx\",\n      \"rgb\": \"rgb(x, x, x)\",\n      \"description\": \"Description of what the color represents\",\n      \"name\": \"Color name\"\n    }\n  ]\n}"
          },
          {
            "role": "user",
            "content": theme
          }
        ],
        temperature: 1,
        max_tokens: 850,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    

      }, {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_APP_OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });
      console.log("Usage:", response.data.usage.total_tokens, "tokens");
      console.log(response.data.choices[0].message.content);

      // reset input
      setTheme('');
      
    } catch (error) {
      console.error("Error during API call: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="message"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;

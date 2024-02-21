import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "react-daisyui";

export const GeneratePalette = () => {
  const [theme, setTheme] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // call netlify api that calls the OpenAi API internally 
      const res1 = await axios.post(`https://huetopia.netlify.app/.netlify/functions/api-request-with-credentials`, { theme })
      const newPalette = JSON.parse(res1.data.info);

      // store new AI palette to REST API
      const res2 = await axios.post("https://huetopia-api.adaptable.app/palettes", newPalette);

       // reset input
       setTheme("");
       navigate(`/palettes/${res2.data.id}`);
    } catch (error) {
      console.log(error);
    }
      
  };

  return (
    <div className="w-full min-h-vh flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="border rounded-xl flex flex-col justify-center items-center w-[500px] h-64"
      >
        <label className="font-bold mt-5 text-xl text-drk-grey flex flex-col items-center">
          <p>Create your own AI</p>
          <p>color palette</p>
        </label>
        <input
          className="input input-bordered w-2/3 max-w-xs min-h-12 m-5"
          type="text"
          id="message"
          value={theme}
          placeholder="What's in your mind?"
          required
          onChange={(e) => setTheme(e.target.value)}
        />
        <button className="btn btn-neutral btn-wide mb-5" type="submit">
          Generate
        </button>
      </form>
    </div>
  );
};

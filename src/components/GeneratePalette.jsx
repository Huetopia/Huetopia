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

    axios
      .post(
        `https://huetopia.netlify.app/.netlify/functions/api-request-with-credentials`,
        { theme }
      )
      .then((response) => {
        console.log(response.data);
        const newPalette = JSON.parse(response.data);

        // write to palettes API endpoint
        return axios.post(
          "https://huetopia-api.adaptable.app/palettes",
          newPalette
        );
      })
      .then((res) => {
        console.log("Success writing to API Endpoint:", res);
        // reset input
        setTheme("");
        navigate(`/palettes/${res.data.id}`);
      })

      .catch((e) => {
        console.log("fail in generatePalette");
        console.log(e);
      });
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

import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import example1 from "../assets/palette-example-1.png";

export const GeneratePalette = () => {
  const [theme, setTheme] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // call netlify api that calls the OpenAi API internally
      const res1 = await axios.post(
        `https://huetopia.netlify.app/.netlify/functions/api-request-with-credentials`,
        { theme }
      );
      const newPalette = JSON.parse(res1.data.info);

      // store new AI palette to REST API
      const res2 = await axios.post(
        "https://huetopia-api.adaptable.app/palettes",
        newPalette
      );

      // reset input
      setTheme("");
      navigate(`/palettes/${res2.data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex-grow flex  pt-20 bg-home bg-left-top bg-no-repeat bg-cover bg-opacity-20 bg-neutral-50 md:items-center md:pt-0">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse items-center h-full md:flex-row sm:px-6 lg:px-8 md:h-full">
        <div className="flex flex-col items-center md:items-start justify-center ">
          <h2 className="text-5xl text-center md:text-left w-full font-bold mb-4 lg:w-3/4 ">Generate stunning color palettes with a tap.</h2>
          <p className="text-lg text-neutral mb-6 text-center md:text-left">
            Harness the power of AI to find color combinations that inspire your
            next project.
          </p>
          <form
            onSubmit={handleSubmit}
            className="rounded-xl  flex flex-row justify-center md:justify-start items-start w-full"
          >
            {/* <label className="font-bold mt-5 text-xl text-drk-grey flex flex-col items-center">
              <p>Create your own AI</p>
              <p>color palette</p>
            </label> */}
            <input
              className="input input-bordered w-2/3  min-h-12  "
              type="text"
              id="message"
              value={theme}
              placeholder="Try a color, mood, or object..."
              required
              onChange={(e) => setTheme(e.target.value)}
            />
            <button className="btn btn-neutral ml-3" type="submit">
              Inspire Me!
            </button>
          </form>
        </div>
        <div className="stack w-2/4 mb-14 mt-10 sm:w-3/5 md:inline-grid lg:w-2/5">
          <img
            src={example1}
            className="rounded"
          />
          <img
            src={example1}
            className="rounded"
          />
          <img
            src={example1}
            className="rounded"
          />
         
        </div>
      </div>
      {/* <ColorPaletteDetails url={palette} /> */}
    </div>
  );
};

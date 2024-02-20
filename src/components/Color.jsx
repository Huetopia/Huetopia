import { useState } from "react";

function Color({ colorProp }) {
  const [infoscreen, setInfoscreen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipBoard = (event) => {
    event.preventDefault();
    setCopied(!copied);
    navigator.clipboard.writeText(colorProp.hex);
  };

  return (
    <div className="flex flex-col text-md md:text-sm lg:text-lg md:w-full md:mr-4 md:last:mr-0">
      <div className="justify-between hidden md:flex mb-2">
        <h1 className="text-neutral  hidden md:block">{`${colorProp.name}`}</h1>
        <button
          className="text-neutral active"
          onClick={() => setInfoscreen(!infoscreen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>

      {/* color element with description and hex */}
      <div
        style={{ backgroundColor: colorProp.hex }}
        //   className="w-50 h-50 colorbox"
        className="flex flex-col justify-center items-end w-full h-24 pr-5 mb-5 rounded-xl md:rounded-none md:rounded-b-xl md:h-96 md:mr-5 last:mr-0 md:justify-between md:items-center md:pb-5 md:pr-0"
        onClick={copyToClipBoard}
      >
        {infoscreen && (
          <div className="p-4 mt-5 hidden md:block bg-gray-50 text-neutral w-4/5 rounded-md ">
            {colorProp.description}
          </div>
        )}

        <div className="badge badge-lg mb-2 md:relative md:bottom-0">
          {colorProp.hex}
        </div>
      </div>
      {copied && <div className="toast">
        <div className="alert alert-info bg-white">
          <span>{colorProp.hex} copied to clipboard</span>
        </div>
      </div>}
      
    </div>
  );
}

export default Color;

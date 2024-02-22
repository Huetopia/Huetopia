import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Color({ colorProp }) {
  const [infoscreen, setInfoscreen] = useState(false);
  // const [copied, setCopied] = useState(false);

  const copyToClipBoard = (event) => {
    event.preventDefault();

    navigator.clipboard.writeText(colorProp.hex);
    toast.success(`${colorProp.hex} copied to clipboard`, {
      autoClose:  2000,
    });

  };

  const showToastMessage = () => {
    
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
        className="flex flex-col justify-center items-end w-full h-24 pr-5 mb-5 rounded-xl md:rounded-none md:rounded-b-xl md:h-96 md:mr-0 last:mr-0 md:justify-between md:items-center md:pb-5 md:pr-0"
        onClick={copyToClipBoard}
      >
        <div className="w-4/5">
          {infoscreen && (
            <div className="p-4 mt-5 hidden md:block bg-bggrey text-neutral w-full rounded-md ">
              {colorProp.description}
            </div>
          )}
        </div>

        <div className="badge badge-lg mb-2 md:relative md:bottom-0">
          {colorProp.hex}
        </div>
      </div>
     
      
    </div>
  );
}

export default Color;

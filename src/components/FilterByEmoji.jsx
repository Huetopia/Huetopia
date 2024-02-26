import axios from "axios";
import { useEffect, useState } from "react";

function FilterByEmoji(props) {
  const [emojisArr, setEmojisArr] = useState([]);

  useEffect(() => {
    axios
      .get("https://huetopia-api.adaptable.app/" + props.url)
      .then((response) => {
        const uniqueEmojis = new Set();

        response.data.forEach((elm) => {
          for (let i = 0; i < elm.theme.emojis.length; i++) {
            if (elm.theme.emojis[i]) uniqueEmojis.add(elm.theme.emojis[i]);
          }
        });

        setEmojisArr(Array.from(uniqueEmojis));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-bggrey w-full mt-0 p-5 flex justify-center items-center">
      <div className="max-w-4xl flex justify-center flex-wrap">
        {emojisArr != [] &&
          emojisArr.map((elm, index) => {
            return (
              <button
                key={index}
                onClick={() => props.filterEmoji(elm)}
                className="btn btn-sm btn-ghost p-0 hover:btn-outline-none"
              >
                <div className="m-1">{elm}</div>
              </button>
            );
          })}
        <button
          onClick={props.resetEmojis}
          className="btn btn-sm btn-ghost p-0 ml-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          Reset
        </button>
      </div>
    </div>
  );
}

export default FilterByEmoji;

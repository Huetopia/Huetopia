import axios from "axios";
import { useEffect, useState } from "react";
import ColorPalette from "./ColorPalette";
import FilterByEmoji from "./FilterByEmoji";

function ColorPalettesList(props) {
  const [palettes, setPalettes] = useState(null);
  const [value, setValue] = useState("");
  const [filterMenu, setFilterMenu] = useState(false)
  const [filtered, setFiltered] = useState(false)

  useEffect(() => {
    axios
      .get("https://huetopia-api.adaptable.app/" + props.url)
      .then((response) => {
        setPalettes(response.data);

        const filteredPalettes = response.data.filter((palette) =>
          palette.colors.some(
            (color) =>
              color.description.includes(value) || color.name.includes(value)
          )
        );

        setFiltered(filteredPalettes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [value]);

  function filterEmoji(chosenEmoji) {
    setPalettes(palettes)

    const filteredPalettes = palettes.filter((palette) => {
      if (palette.theme.emojis[0] === chosenEmoji || palette.theme.emojis[1] === chosenEmoji || palette.theme.emojis[2] === chosenEmoji) {
        return palette
      }
    })
    setFiltered(filteredPalettes);
  }


  return (
    <div className="flex flex-col p-10 max-w-7xl min-h-vh">
      <div className="min-w-full max-w-7xl md:mx-2 lg:m-3.5 xl:min-w-[1200px] lg:min-w-[800px]">
        <div className="flex flex-col justify-between sm:flex-row sm:items-end">
          {props.url === "favourites" && (
            <h1 className="font-bold text-neutral">FAVOURITES</h1>
          )}
          {props.url === "palettes" && (
            <h1 className="font-bold text-neutral">ALL COLORS</h1>
          )}
          <div className="flex flex-col items-end sm:items-center sm:flex-row">
            <button className="btn btn-sm mx-4" onClick={() => setFilterMenu(!filterMenu)}>
              EMOJI FILTER
            </button>
            <label className="w-full input input-bordered flex items-center gap-2 sm:w-50 h-7 my-1">
              <input
                value={value}
                type="text"
                className="grow"
                placeholder="Search"
                onChange={(e) => setValue(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className="divider my-0"></div>
        {filterMenu &&
          <FilterByEmoji url={props.url} filterEmoji={filterEmoji} />
        }
      </div>
      <div className="flex flex-wrap grid-cols-3 text-neutral ">
        {palettes === null ? (
          <div className="w-full flex justify-center">
            <span className="loading loading-bars loading-md"></span>
          </div>
        ) : palettes.length > 0 ? (
          filtered
            .sort(function (a, b) {
              return b.id - a.id;
            })
            .map((elm) => {
              return (
                <ColorPalette key={elm.id} palette={elm} url={props.url} />
              );
            })
        ) : (
          <div className="w-full flex justify-center">
            No color palettes available
          </div>
        )}
      </div>
    </div>
  );
}

export default ColorPalettesList;

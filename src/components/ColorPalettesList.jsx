import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ColorPalette from "./ColorPalette";

function ColorPalettesList(props) {
  const [palettes, setPalettes] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    axios
      .get("https://huetopia-api.adaptable.app/" + props.url)
      .then((response) => {
        setPalettes(response.data);

        const filteredPalettes = response.data.filter((elm) => {
          if (
            elm.colors[0].description.includes(value) ||
            elm.colors[1].description.includes(value) ||
            elm.colors[2].description.includes(value) ||
            elm.colors[3].description.includes(value) ||
            elm.colors[4].description.includes(value) ||
            elm.colors[0].name.includes(value) ||
            elm.colors[1].name.includes(value) ||
            elm.colors[2].name.includes(value) ||
            elm.colors[3].name.includes(value) ||
            elm.colors[4].name.includes(value)
          ) {
            console.log("ok");
            return true;
          } else {
            console.log("no");
            return false;
          }
        })
        setPalettes(filteredPalettes)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [value]);


  return (
    <div>
      <div className="w-11/12">
        <div className="inline flex justify-between items-center">
          {props.url === "favourites" && (
            <h1 className="font-bold text-neutral">FAVOURITES</h1>
          )}
          {props.url === "palettes" && (
            <h1 className="font-bold text-neutral">ALL COLORS</h1>
          )}
          <label className="input input-bordered flex items-center gap-2 w-50 h-7 my-2">
            <input value={value} type="text" className="grow" placeholder="Search" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
          </label>
        </div>
        <hr className="border-neutral" />
      </div>
      <div className="flex flex-wrap text-neutral">
        {palettes === null ? (
          <div>Loading...</div>
        ) : (
          palettes.map((elm) => {
            return <ColorPalette key={elm.id} palette={elm} />;
          })
        )}
      </div>
    </div>
  );
}

export default ColorPalettesList;

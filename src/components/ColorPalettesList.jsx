import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ColorPalette from "./ColorPalette";

function ColorPalettesList(props) {
  const [palettes, setPalettes] = useState(null);
  const [value, setValue] = useState("");
  const [filteredColors, setFilteredColors] = useState(palettes);

  useEffect(() => {
    axios
      .get("https://huetopia-api.adaptable.app/" + props.url)
      .then((response) => {
        setPalettes(response.data);
        //    return axios.get(`https://huetopia-api.adaptable.app/favourites`);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  // setFilteredColors(
  //   palettes &&
  //     palettes.filter((elm) => {
  //       console.log(elm);
  //       if (
  //         elm.colors[0].description.includes(value) ||
  //         elm.colors[0].name.includes(value)
  //       ) {
  //         console.log("ok");
  //         return true;
  //       } else {
  //         console.log("no");
  //         return false;
  //       }
  //     })
  // );

  return (
    <div>
      <label>Search:</label>
      <input
        onChange={(e) => {
          setValue(e.target.value);
          console.log(e.target.value);
        }}
        type="text"
        value={value}
        placeholder="enter your search"
      />
      <div className="w-11/12">
        {props.url === "favourites" && (
          <h1 className="font-bold text-neutral">FAVOURITES</h1>
        )}
        {props.url === "palettes" && (
          <h1 className="font-bold text-neutral">ALL COLORS</h1>
        )}
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

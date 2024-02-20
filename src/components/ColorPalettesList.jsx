import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ColorPalette from "./ColorPalette";

function ColorPalettesList(props) {
  const [palettes, setPalettes] = useState(null);


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


  return (
    <div>
      <div className="w-11/12">
        {props.url === "favourites" &&
          <h1 className="font-bold text-neutral">FAVOURITES</h1>
        }
        {props.url === "palettes" &&
          <h1 className="font-bold text-neutral">ALL COLORS</h1>
        }
        <hr />
      </div>
      <div className="flex flex-wrap text-neutral">
        {palettes === null ? (
          <div>Loading...</div>
        ) : (
          palettes.map((elm) => {
            return (
              <ColorPalette key={elm.id} palette={elm} />
            );
          })
        )}
      </div>
    </div>
  );
}

export default ColorPalettesList;

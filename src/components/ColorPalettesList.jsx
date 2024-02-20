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
    <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6   h-16">
      <div className="max-w-7xl">
        {props.url === "favourites" &&
          <h1 className="font-bold text-neutral">FAVOURITES</h1>
        }
        {props.url === "palettes" &&
          <h1 className="font-bold text-neutral">ALL COLORS</h1>
        }
        <div className="divider mt-0"></div>
      </div>
      <div className="flex flex-wrap justify-start gap-4"> 


        {palettes === null ? (
          <div className="w-full flex justify-center">
            <span className="loading loading-bars loading-md"></span>
          </div>
        ) : (
          palettes.map((elm) => {
            return (
              <ColorPalette key={elm.id} palette={elm} url={props.url} />
            );
          })
        )}
      </div>
    </div>
  );
}

export default ColorPalettesList;

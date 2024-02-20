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
    <div className="flex flex-col justify-center p-10 max-w-7xl">
      <div className="min-w-full max-w-7xl md:mx-2 lg:m-3.5 xl:min-w-[1200px] lg:min-w-[800px]">
        {props.url === "favourites" &&
          <h1 className="font-bold text-neutral">FAVOURITES</h1>
        }
        {props.url === "palettes" &&
          <h1 className="font-bold text-neutral">ALL COLORS</h1>
        }
        <div className="divider mt-0"></div>
      </div>
      <div className="flex flex-wrap grid-cols-3 text-neutral ">
        {palettes === null ? (
          <div className="w-full min-h-[400px] flex justify-center">
            <span className="loading loading-bars loading-md"></span>
          </div>
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

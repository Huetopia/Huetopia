import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Color from "./Color";

export const ColorPaletteDetails = () => {
  const [palette, setPalette] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://huetopia-api.adaptable.app/palettes/${id}`)
      .then((response) => {
        console.log(response.data);
        setPalette(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(palette);
  return (
    <div>
      {palette !== null && (
        <>
          <h1>{`${palette.theme.emojis[0]} ${palette.theme.input}`}</h1>

          {/* map */}
         
         {
            palette.colors.map((color, index) => {
                return <Color colorProp={color} key={index}/>
            })

         }

        </>
      )}
    </div>
  );
};

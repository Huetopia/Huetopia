import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../src/App.css";

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
      {/* <h1>{palette}</h1> */}
      {palette !== null && (
        <>
          <div
            style={{ backgroundColor: palette.colors[0].hex }}
            className="colorbox"
          ></div>
          <div style={{ backgroundColor: palette.colors[1].hex }}
            className="colorbox"></div>
          <div style={{ backgroundColor: palette.colors[2].hex }}
            className="colorbox"></div>
          <div style={{ backgroundColor: palette.colors[3].hex }}
            className="colorbox"></div>
          <div style={{ backgroundColor: palette.colors[4].hex }}
            className="colorbox"></div>
      
        </>
      )}
    </div>
  );
};

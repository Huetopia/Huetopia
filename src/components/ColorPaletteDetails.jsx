import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Color from "./Color";

export const ColorPaletteDetails = () => {
  const [palette, setPalette] = useState(null);
  const [favorite, setFavorite] = useState(false);
  console.log(favorite);

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
  // console.log(palette);
  
  //click on Fav button
  const favoriteHandler = () => {
    setFavorite(!favorite);
    console.log(favorite);
    // show filled heart icon
  }
  
  return (
    <div className="flex flex-col p-10">
      {palette !== null && (
        <>
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold text-neutral uppercase">{`${palette.theme.emojis[0]} ${palette.theme.input}`}</h1>
            <button className="btn " onClick={favoriteHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M17.516 3c2.382 0 4.487 1.564 4.487 4.712 0 4.963-6.528 8.297-10.003 11.935-3.475-3.638-10.002-6.971-10.002-11.934 0-3.055 2.008-4.713 4.487-4.713 3.18 0 4.846 3.644 5.515 5.312.667-1.666 2.333-5.312 5.516-5.312zm0-2c-2.174 0-4.346 1.062-5.516 3.419-1.17-2.357-3.342-3.419-5.515-3.419-3.403 0-6.484 2.39-6.484 6.689 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-4.586-3.414-6.689-6.484-6.689z" />
              </svg>
            </button>
          </div>
          <div className="divider mt-0"></div>

          <div className="flex flex-col w-full justify-between md:flex-row">
            {palette.colors.map((color, index) => {
              return <Color colorProp={color} key={index} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

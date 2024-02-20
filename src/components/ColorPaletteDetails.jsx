import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Color from "./Color";

export const ColorPaletteDetails = () => {
  const [palette, setPalette] = useState(null);
  const [favourite, setFavourite] = useState(false);

  const { paletteId } = useParams();

  useEffect(() => {
    axios.get(`https://huetopia-api.adaptable.app/palettes/${paletteId}`)
      .then((response) => {
        // console.log(response.data);
        setPalette(response.data);
        return axios.get(`https://huetopia-api.adaptable.app/favourites`)
      })
      .then((response) => {
        response.data.find((elm) => {
          if (elm.id == paletteId) {
            setFavourite(true)
          }
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  //click on Fav button
  const favouriteHandler = () => {
    setFavourite(!favourite);

    if (!favourite) {
      axios.post("https://huetopia-api.adaptable.app/favourites", palette)
        .then(() => {
          console.log("Added to favourites")
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      axios.delete(`https://huetopia-api.adaptable.app/favourites/${paletteId}`)
        .then(() => {
          console.log("Removed from favourites")
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return (
    <div className="flex flex-col p-10">
      {palette !== null && (
        <>
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold text-neutral uppercase">{`${palette.theme.emojis[0]} ${palette.theme.input}`}</h1>
            {favourite === true
              ? <button onClick={favouriteHandler} className="btn btn-sm btn-ghost p-0 hover:btn-outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </button>
              : <button onClick={favouriteHandler} className="btn btn-sm btn-ghost p-0 hover:btn-outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </button>}
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

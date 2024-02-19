import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function ColorPalettesList(props) {
  const [palettes, setPalettes] = useState(null);
  const [favourite, setFavourite] = useState(false);

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

  const favouriteHandler = (id) => {
    setFavourite(!favourite);
    console.log(favourite);
    const palette = palettes.find((elm) => {
      return elm.id === id;
    });
    console.log("palette: ", palette);

    if (!favourite) {
      axios
        .post("https://huetopia-api.adaptable.app/favourites", palette)
        .then(() => {
          console.log("Added to favourites");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .delete(`https://huetopia-api.adaptable.app/favourites/${palette.id}`)
        .then(() => {
          console.log("Removed from favourites");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // show filled heart icon
  };

  return (
    <div>
      <div className="w-11/12">
        <h1 className="font-bold text-neutral">ALL COLORS</h1>
        <hr />
      </div>
      <div className="flex flex-wrap text-neutral">
        {palettes === null ? (
          <div>Loading...</div>
        ) : (
          palettes.map((elm) => {
            return (
              <div key={elm.id} className="w-3/12 m-6">
                <div className="flex flex-row justify-between items-center">
                  <Link to={`/palettes/${elm.id}`}>
                    <h2 className="text-neutral capitalize">
                      {elm.theme.emojis[0]} {elm.theme.input}
                    </h2>
                  </Link>

                  {favourite === true ? (
                    <button
                      onClick={() => favouriteHandler(elm.id)}
                      className="btn btn-sm btn-ghost p-0 hover:btn-outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={() => favouriteHandler(elm.id)}
                      className="btn btn-sm btn-ghost p-0 hover:btn-outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                <Link to={`/palettes/${elm.id}`}>
                  <div
                    className="w-full h-12"
                    style={{ backgroundColor: elm.colors[0].hex }}
                  ></div>
                  <div
                    className="w-full h-12"
                    style={{ backgroundColor: elm.colors[1].hex }}
                  ></div>
                  <div
                    className="w-full h-12"
                    style={{ backgroundColor: elm.colors[2].hex }}
                  ></div>
                  <div
                    className="w-full h-12"
                    style={{ backgroundColor: elm.colors[3].hex }}
                  ></div>
                  <div
                    className="w-full h-12 rounded-b-2xl"
                    style={{ backgroundColor: elm.colors[4].hex }}
                  ></div>
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default ColorPalettesList;

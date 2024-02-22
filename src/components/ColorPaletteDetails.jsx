import { useParams} from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Color from "./Color";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ColorPaletteDetails = (props) => {
  const [palette, setPalette] = useState(null);
  const [favourite, setFavourite] = useState(false);
  const [editable, setEditable] = useState(false);

  const formRef = useRef(null); // reference to the form
  
  const { paletteId } = useParams();


  useEffect(() => {
    axios
      .get(`https://huetopia-api.adaptable.app/${props.url}/${paletteId}`) 
      .then((response) => {
        // console.log(response.data);
        setPalette(response.data);
        return axios.get(`https://huetopia-api.adaptable.app/favourites`);
      })
      .then((response) => {
        response.data.find((elm) => {
          if (elm.id == paletteId) {
            setFavourite(true);
          }
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const editName = () => {
    if (!editable) {
      console.log("Editable:", editable);
      setEditable(!editable);
    }
  };

  //click on Fav button
  const favouriteHandler = (event) => {
    event.stopPropagation(); // Stop event propagation
    setFavourite(!favourite);
    console.log(favourite);
  
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
        .delete(`https://huetopia-api.adaptable.app/favourites/${paletteId}`)
        .then(() => {
          console.log("Removed from favourites");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // submit form and update palette
  const updateHandler = (event) => {
    event.preventDefault();
    event.stopPropagation()
    console.log("updateHandler");
    console.log(palette);

    // update palette in database
    axios.put(`https://huetopia-api.adaptable.app/favourites/${paletteId}`, palette)
     .then((result) => {
      // show success message
      toast.success(`Palette Name updated`, {
        autoClose:  3000,
      });
     }).catch((err) => {
      toast.error(`Something went wrong: ${err}`, {
        autoClose:  3000,
      });
      console.log(err);
     });
    
     // reset editable state
    setEditable(!editable);
  };

  return (
   
      <div className="max-w-7xl sm:px-6 lg:px-8 pt-10 px-4 w-full flex-grow flex flex-col m-auto">
        {palette !== null && (
          <>
            <div className="flex justify-between">
              {editable ? (
                <div className="flex">
                  <h1
                    className="text-2xl font-bold text-neutral capitalize"
                    onClick={editName}
                  >{`${palette.theme.emojis[0]} `}</h1>
                  <form ref={formRef} >
                    <input
                      className="w-96 text-2xl font-bold text-neutral capitalize ml-2 pl-2 border border-neutral-300 bg-neutral-50 rounded
                      "
                      type="text"
                      value={palette.theme.input}
                      onChange={(e) =>
                        setPalette({
                          ...palette,
                          theme: { ...palette.theme, input: e.target.value },
                        })
                      }
                    />
      
                  </form>
                </div>
              ) : (
                <h1 className="text-2xl font-bold text-neutral capitalize">{`${palette.theme.emojis[0]} ${palette.theme.input}`}</h1>
              )}
              {favourite === true ? (
                <div className="flex gap-5 items-center" onClick={editName}>
                  {editable ? <button className="btn btn-xs" onClick={updateHandler} >Update</button> : <button className="btn btn-xs ">Edit</button>}
      
                  <button
                    onClick={favouriteHandler}
                    className="btn btn-sm btn-ghost  p-0 hover:btn-outline-none hover:bg-transparent hover:fill-none"
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
                </div>
              ) : (
                <button
                  onClick={favouriteHandler}
                  className="btn btn-sm btn-ghost fill-none p-0 hover:btn-outline-none hover:bg-transparent hover:fill-neutral-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    // fill="none"
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
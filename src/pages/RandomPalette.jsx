import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// export const RandomPalette = () => {
//   const [colors, setColors] = useState();
//   const [randomColor, setRandomColor] = useState();

//   const handleRandomClick = () => {
//     let randomIndex = Math.floor(Math.random() * colors.length);
//     console.log(colors[randomIndex]);
//     setRandomColor(colors[randomIndex]);
//     console.log("RandomColor:", randomColor);
//   };

//   useEffect(() => {
//     axios
//       .get("https://huetopia-api.adaptable.app/palettes")
//       .then((response) => {
//         setColors(response.data[0].colors);
//       })

//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   return (
//     <div>
//       <button
//         className="bg-gray-400 rounded-md py-3 px-3 hover:bg-slate-700 text-white"
//         onClick={handleRandomClick}
//       >
//         random pick
//       </button>
//       <div
//         className="w-full h-12"
//         style={{ backgroundColor: randomColor.hex }}
//       ></div>
//     </div>
//   );
// };

export const RandomPalette = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://huetopia-api.adaptable.app/palettes")
      .then((response) => {
        let palettesLength = response.data.length;
        let randomIndex = Math.floor(Math.random() * palettesLength) + 1;

        navigate(`/palettes/${randomIndex}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div></div>;
};

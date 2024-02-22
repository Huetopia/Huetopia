import axios from "axios";
import { useEffect, useState } from "react";

function FilterByEmoji(props) {

    const [palettes, setPalettes] = useState(null);

    useEffect(() => {
        axios
            .get("https://huetopia-api.adaptable.app/" + props.url)
            .then((response) => {
                setPalettes(response.data);

                let emojisArr = []

                response.data.map((elm) => {
                    elm.theme.emojis[0] && emojisArr.push(elm.theme.emojis[0])
                    elm.theme.emojis[1] && emojisArr.push(elm.theme.emojis[1])
                    elm.theme.emojis[2] && emojisArr.push(elm.theme.emojis[2])
                })
                console.log(emojisArr)
                //   const filteredPalettes = response.data.filter((palette) =>
                //     palette.colors.some(
                //       (color) =>
                //         color.description.includes(value) || color.name.includes(value)
                //     )
                //   );

                //   setPalettes(filteredPalettes);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="bg-bggrey w-full h-20 mt-0 flex justify-center">
            {palettes === null ? (
                <div className="w-full flex justify-center">
                    <span className="loading loading-bars loading-md"></span>
                </div>
            ) : (
                palettes.map((elm) => {
                    return "";
                })
            )
            }
        </div>
    )

}

export default FilterByEmoji;
import axios from "axios";
import { useEffect, useState } from "react";

function FilterByEmoji(props) {
    const [emojisArr, setEmojisArr] = useState([])

    useEffect(() => {
        axios
            .get("https://huetopia-api.adaptable.app/" + props.url)
            .then((response) => {
                const uniqueEmojis = new Set();

                response.data.forEach(elm => {
                  if (elm.theme.emojis[0]) uniqueEmojis.add(elm.theme.emojis[0]);
                  if (elm.theme.emojis[1]) uniqueEmojis.add(elm.theme.emojis[1]);
                  if (elm.theme.emojis[2]) uniqueEmojis.add(elm.theme.emojis[2]);
                });
        
                setEmojisArr(Array.from(uniqueEmojis));

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
        <div className="bg-bggrey w-full h-20 mt-0 flex justify-center flex-wrap">
            {emojisArr != [] &&
                emojisArr.map((elm,index) => {
                    return <div key={index}>{elm}</div>;
                })
            }
        </div>
    )

}

export default FilterByEmoji;
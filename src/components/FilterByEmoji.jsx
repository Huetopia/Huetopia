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
        <div className="bg-bggrey w-full mt-0 p-5 flex justify-center items-center">
            <div className="max-w-2xl flex justify-center flex-wrap">
                {emojisArr != [] &&
                    emojisArr.map((elm, index) => {
                        return <button key={index} className="btn btn-sm btn-ghost p-0 hover:btn-outline-none">
                            <div className="m-1">{elm}</div>
                        </button>
                    })
                }
            </div>
        </div>
    )

}

export default FilterByEmoji;
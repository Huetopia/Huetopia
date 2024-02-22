import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ColorPalette(props) {
    const { palette } = props;

    const [favourite, setFavourite] = useState(false);

    useEffect(() => {
        axios.get(`https://huetopia-api.adaptable.app/favourites`)
            .then((response) => {
                response.data.find((elm) => {
                    if (elm.id == palette.id) {
                        setFavourite(true)
                    }
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

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
            axios.delete(`https://huetopia-api.adaptable.app/favourites/${palette.id}`)
                .then(() => {
                    console.log("Removed from favourites")
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    return (
        <div key={palette.id} className="w-full my-4 md:w-30 md:mx-2 lg:m-3.5">
                <div className="flex flex-row justify-between items-center">
                    <Link to={`/${props.url}/${palette.id}`}>
                        <h2 className="text-neutral capitalize text-sm lg:text-base">
                            {palette.theme.emojis[0]} {palette.theme.input}
                        </h2>
                    </Link>

                    {favourite === true
                        ? (
                            <button
                                onClick={favouriteHandler}
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
                                onClick={favouriteHandler}
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
                <Link to={`/${props.url}/${palette.id}`}>
                    <div
                        className="w-full h-12"
                        style={{ backgroundColor: palette.colors[0].hex }}
                    ></div>
                    <div
                        className="w-full h-12"
                        style={{ backgroundColor: palette.colors[1].hex }}
                    ></div>
                    <div
                        className="w-full h-12"
                        style={{ backgroundColor: palette.colors[2].hex }}
                    ></div>
                    <div
                        className="w-full h-12"
                        style={{ backgroundColor: palette.colors[3].hex }}
                    ></div>
                    <div
                        className="w-full h-12 rounded-b-2xl"
                        style={{ backgroundColor: palette.colors[4].hex }}
                    ></div>
                </Link>
        </div>
    )
}

export default ColorPalette;
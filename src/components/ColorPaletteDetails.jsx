import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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

  return <div></div>;
};

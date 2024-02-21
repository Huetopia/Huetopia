import ColorPalettesList from "../components/ColorPalettesList";
import { useState, useEffect } from "react";
import axios from "axios";

export const Favourites = (props) => {
  return (
    <div>
      <ColorPalettesList url={props.url} />
    </div>
  );
};

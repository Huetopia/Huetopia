import ColorPalettesList from "../components/ColorPalettesList";
import { useState, useEffect } from "react";
import axios from "axios";

export const Favourites = (props) => {
  return (
    <div className="flex justify-center min-h-vh">
      <ColorPalettesList url={props.url} />
    </div>
  );
};

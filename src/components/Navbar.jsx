import { Favorites } from "../pages/Favorites";
import { AllColors } from "../pages/AllColors";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex w-full h-10  bg-blue-500 ">
      <Link to="/">
        <div>Huetopia</div>
      </Link>
      <Link to="/palettes/favorites">
        <Favorites />
      </Link>
      <Link to="/palettes">
        <AllColors />
      </Link>
    </div>
  );
};

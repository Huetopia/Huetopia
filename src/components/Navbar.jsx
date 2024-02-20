import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-bggrey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6  flex justify-between items-center h-16">
        <Link to="/">
          <div className="text-2xl font-bold text-neutral">HUETOPIA</div>
        </Link>

        <div className="hidden lg:block ml-0 space-x-4 text-sm">
          <NavLink
            className="text-grey font-bold hover:black m-5" to="/random">
            RANDOM PALETTE
          </NavLink>
          <NavLink
            className="text-grey font-bold hover:black m-5"
            to="/favourites"
          >
            FAVOURITES
          </NavLink>
          <NavLink
            className="text-grey font-bold hover:black m-5" to="/palettes"
          >
            ALL COLORS
          </NavLink>
          <Link to="/">
            <button className="btn btn-neutral btn-sm ">New</button>
          </Link>
        </div>
        {/* Burger menu button positioned in top-right corner */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

      </div>
      {/* Responsive Burger Menu (shown on small screens) */}
      {
        isMenuOpen && (
          <div className="lg:hidden absolute top-0 right-0 mt-16 bg-gray-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                to="/favourites"
                className="block text-gray-800 hover:black"
              >
                Favourites
              </NavLink>
              <NavLink
                to="/palettes"
                className="block text-gray-800 hover:black"
              >
                All colors
              </NavLink>
              <div className="block text-gray-800 hover:black">New</div>
            </div>
          </div>
        )
      }
    </div >
  );
};

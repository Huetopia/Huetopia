import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <div className="text-xl font-bold">Huetopia</div>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link className="text-gray-800 hover:text-gray-500" to="/about">
                About
              </Link>
              <Link
                className="text-gray-800 hover:text-gray-500"
                to="/favorites"
              >
                Favorites
              </Link>
              <Link
                className="text-gray-800 hover:text-gray-500"
                to="/palettes"
              >
                All colors
              </Link>
              <div className="text-gray-800 hover:text-gray-500">New</div>
            </div>
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
      </div>
      {/* Responsive Burger Menu (shown on small screens) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-0 right-0 mt-16 bg-gray-300">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/palettes/favorites"
              className="block text-gray-800 hover:text-gray-500"
            >
              Favorites
            </Link>
            <Link
              to="/palettes"
              className="block text-gray-800 hover:text-gray-500"
            >
              All colors
            </Link>
            <div className="block text-gray-800 hover:text-gray-500">New</div>
          </div>
        </div>
      )}
    </div>
  );
};

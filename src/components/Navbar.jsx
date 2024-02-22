import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-bggrey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="" className="h-8 pr-3" />
          <div className="text-2xl font-bold text-neutral">HUETOPIA</div>
        </Link>

        <nav className="hidden md:block ml-0 space-x-5 lg:space-x-10 text-sm">
          <NavLink
            className="text-grey font-bold hover:text-drk-grey hover:border-b-2 hover:border-b-drk-grey "
            activeClassName="text-drk-grey border-b-2 border-b-drk-grey"
            to="/random"
          >
            RANDOM PALETTE
          </NavLink>
          <NavLink
            activeClassName="text-drk-grey border-b-2 border-b-drk-grey"
            className="text-grey font-bold hover:text-drk-grey hover:border-b-2 hover:border-b-drk-grey "
            to="/favourites"
          >
            FAVOURITES
          </NavLink>
          <NavLink
            activeClassName="text-drk-grey border-b-2 border-b-drk-grey"
            className="text-grey font-bold hover:text-drk-grey hover:border-b-2 hover:border-b-drk-grey"
            to="/palettes"
          >
            ALL COLORS
          </NavLink>
          <Link to="/">
            <button className="btn btn-neutral btn-sm ml-5">New</button>
          </Link>
        </nav>

        <div className="dropdown dropdown-end md:hidden z-50">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              className="h-8 w-8"
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
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <NavLink
                className="text-grey font-bold hover:text-drk-grey hover:border-b-2 hover:border-b-drk-grey "
                activeClassName="text-drk-grey border-b-2 border-b-drk-grey"
                to="/random"
              >
                Random Palette
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="text-drk-grey border-b-2 border-b-drk-grey"
                className="text-grey font-bold hover:text-drk-grey hover:border-b-2 hover:border-b-drk-grey "
                to="/favourites"
              >
                Favourites
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="text-drk-grey border-b-2 border-b-drk-grey"
                className="text-grey font-bold hover:text-drk-grey hover:border-b-2 hover:border-b-drk-grey"
                to="/palettes"
              >
                All Colors
              </NavLink>
            </li>
            <li>
              <Link to="/">
                <button className="btn btn-neutral btn-sm">New</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

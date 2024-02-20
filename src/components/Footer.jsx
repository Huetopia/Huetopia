import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-bggrey py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <p>
          <Link className="text-neutral hover:black" to="/about">
            About
          </Link> Huetopia. Link to webapp repo / link to api repo
        </p>
      </div>
    </div>
  );
};

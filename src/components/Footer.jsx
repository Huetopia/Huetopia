import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="w-full bg-bggrey py-4">
      <Link className="text-neutral hover:black" to="/about">
        About
      </Link>
    </div>
  );
};

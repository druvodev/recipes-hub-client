import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center gap-5 py-3 px-10 shadow">
      <Link to={"/"}>
        <p className="text-2xl font-bold">
          Recipes<span className="text-amber-500">Hub</span>
        </p>
      </Link>
      <ul className="flex justify-between gap-4 text-lg">
        <li>Home</li>
        <li>Blog</li>
      </ul>
      <span>
        <img
          className="w-12 h-12 rounded-full"
          src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
          alt="profile"
          title="Your Name"
        />
      </span>
    </nav>
  );
};

export default Navbar;

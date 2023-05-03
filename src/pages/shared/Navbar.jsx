import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [login, setLogin] = useState(true);

  return (
    <nav className="flex justify-between items-center gap-5 py-3 px-10 shadow">
      <Link to={"/"}>
        <p className="text-2xl font-bold">
          Recipes<span className="text-amber-500">Hub</span>
        </p>
      </Link>
      <ul className="flex justify-between gap-4 text-lg">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-amber-500 underline underline-offset-2" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/blog"}
          className={({ isActive }) =>
            isActive ? "text-amber-500 underline underline-offset-2" : ""
          }
        >
          Blog
        </NavLink>
      </ul>
      <div className="flex gap-2 items-center">
        {user ? (
          <>
            <img
              className="w-10 h-10 rounded-full"
              src={user?.photoURL}
              alt="avatar"
              title={user?.displayName}
            />
            <span
              onClick={() => logOut()}
              className="bg-rose-50 text-rose-500 hover:bg-rose-100 w-10 h-10 text-2xl rounded-full flex items-center justify-center cursor-pointer"
            >
              <FiLogOut />
            </span>
          </>
        ) : login ? (
          <Link
            onClick={() => setLogin(!login)}
            to={"/login"}
            className="bg-amber-500 text-white font-semibold rounded-md px-3 py-1 text-lg"
          >
            Login
          </Link>
        ) : (
          <Link
            onClick={() => setLogin(!login)}
            to={"/registration"}
            className="border border-amber-500 hover:bg-amber-500 hover:text-white duration-200 font-semibold rounded-md px-3 py-1 text-lg"
          >
            Registration
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useContext, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const [login, setLogin] = useState(location.pathname === "/login");

  const toggleLogin = () => {
    setLogin(!login);
  };

  return (
    <nav className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 sm:gap-5 py-3 px-5 sm:px-10 shadow mt-0 bg-white">
      <Link to={"/"}>
        <p className="text-2xl font-bold">
          Recipes<span className="text-amber-500">Hub</span>
        </p>
      </Link>
      <div className="flex items-center justify-between gap-5">
        <ul className="flex justify-between gap-5 text-lg font-semibold">
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
        <div className="flex gap-3 items-center">
          {user?.displayName ? (
            <>
              <img
                className="w-10 h-10 rounded-full"
                src={
                  user.photoURL
                    ? user.photoURL
                    : "https://i.ibb.co/Ws1r9fp/images.png"
                }
                alt="avatar"
                title={user?.displayName}
              />
              <span
                onClick={() => logOut()}
                className="bg-rose-50 text-rose-500 hover:bg-rose-100 w-10 h-10 text-2xl rounded-full flex items-center justify-center cursor-pointer shadow-md"
              >
                <FiLogOut />
              </span>
            </>
          ) : !login ? (
            <Link
              onClick={() => toggleLogin()}
              to={"/login"}
              className="bg-amber-500 text-white font-semibold rounded-md px-3 py-1 text-lg"
            >
              Login
            </Link>
          ) : (
            <Link
              onClick={() => toggleLogin()}
              to={"/registration"}
              className="border border-amber-500 hover:bg-amber-500 hover:text-white duration-200 font-semibold rounded-md px-3 py-1 text-lg"
            >
              Registration
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

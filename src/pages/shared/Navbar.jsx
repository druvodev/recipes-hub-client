import React, { useContext, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FiLogOut } from "react-icons/fi";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { scrollTop } from "../../utils/utils";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const [login, setLogin] = useState(location.pathname === "/login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleLogin = () => {
    setLogin(!login);
  };

  return (
    <>
      <div className="flex justify-between items-center absolute sticky sm:hidden left-0 top-0 z-50 bg-white w-full px-5 py-2">
        <Link to={"/"}>
          <p className="text-2xl font-bold" onClick={() => scrollTop()}>
            Recipes<span className="text-amber-500">Hub</span>
          </p>
        </Link>
        <div className="" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <HiXMark className="h-10 w-10 text-amber-500" />
          ) : (
            <HiBars3 className="h-10 w-10 text-amber-500" />
          )}
        </div>
      </div>
      <nav
        className={`flex flex-col sm:flex-row justify-between items-center gap-3 py-3 px-5 sm:px-8 bg-white sticky sm:top-0 sm:rounded-none z-40 border-b w-full ${
          isMenuOpen
            ? "top-10 block rounded-md duration-500"
            : "-top-60 hidden sm:top-0 sm:inline-flex"
        }`}
      >
        <Link to={"/"}>
          <p
            className="text-2xl font-bold hidden sm:block"
            onClick={() => scrollTop()}
          >
            Recipes<span className="text-amber-500">Hub</span>
          </p>
        </Link>
        <div className="flex items-center justify-between gap-5">
          <ul className="flex justify-between gap-5 text-lg font-semibold">
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <NavLink
                onClick={() => scrollTop()}
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-amber-500 underline underline-offset-2" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <NavLink
                onClick={() => scrollTop()}
                to={"/blog"}
                className={({ isActive }) =>
                  isActive ? "text-amber-500 underline underline-offset-2" : ""
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
          <div className="flex gap-3 items-center">
            {user?.displayName ? (
              <>
                <div className="relative">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://i.ibb.co/Ws1r9fp/images.png"
                    }
                    alt="avatar"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                  />
                  <span
                    className={`absolute top-1/2 right-full py-2 px-4 bg-gray-700 text-white text-sm rounded-lg ${
                      showTooltip ? "block" : "hidden"
                    }`}
                  >
                    {user?.displayName}
                  </span>
                </div>

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
    </>
  );
};

export default Navbar;

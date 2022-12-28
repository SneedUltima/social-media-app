import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useLogout } from "../hooks/UseLogout";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { logout } = useLogout();
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  const handleClick = () => setNav(!nav);
  return (
    <>
      <div className="w-screen h-[100px] bg-odin-blue border-b-2 border-b-odin-gold flex items-center justify-between px-5 sm:px-10">
        <div>
          <h1 className="font-bold text-odin-gold text-lg sm:text-4xl cursor-pointer">
            odinbook.
          </h1>
        </div>
        <div className="flex gap-12 items-center sm:items-baseline">
          <div>
            <p className="text-odin-white text-md sm:text-2xl">
              {user ? user.firstName : "Guest"}
            </p>
          </div>
          <div className="hidden md:flex sm:gap-10 gap-4">
            <p
              onClick={handleLogout}
              className="text-odin-white text-md sm:text-2xl cursor-pointer"
            >
              Logout
            </p>
          </div>
          <div className="md:hidden" onClick={handleClick}>
            {!nav ? (
              <Bars3Icon className="w-7 text-odin-white font-bold cursor-pointer" />
            ) : (
              <XMarkIcon className="w-7 text-odin-white font-bold cursor-pointer" />
            )}
          </div>
        </div>
      </div>
      <div
        className={
          !nav
            ? "hidden"
            : "absolute bg-odin-blue w-full px-5 py-4 flex flex-col gap-2"
        }
      >
        <p className="text-odin-white text-md sm:text-2xl border-b-2">Logout</p>
      </div>
    </>
  );
};

export default Navbar;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../context/AuthContext";
import { useLogout } from "../hooks/UseLogout";
import guestImage from "../images/guestImage.png";

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
      <div className="w-screen h-[100px] bg-odin-blue border-b-2 border-b-odin-brightblue flex items-center justify-between px-5 sm:px-10 2xl:px-60">
        <div>
          <Link
            to="/"
            className="font-bold text-odin-gold text-lg sm:text-4xl cursor-pointer"
          >
            <span className="text-odin-white">social</span>
            <span className="text-odin-brightblue">scape.</span>
          </Link>
        </div>
        <div className="flex gap-12 items-center">
          <div className="flex flex-row gap-2 items-center cursor-pointer">
            <img
              src={user.selectedFile ? user.selectedFile : guestImage}
              alt="profile"
              className="w-7 h-7 rounded-full object-cover ring-4 ring-gray-300"
            />
            <Link
              to={`${user.id}`}
              className="text-odin-white text-md sm:text-2xl"
            >
              {user ? user.firstName : "Guest"}
            </Link>
          </div>
          <div className="hidden md:flex sm:gap-10 gap-4">
            <div className="flex justify-center items-center border-2 py-1 px-1 border-odin-brightblue rounded-xl hover:bg-odin-brightblue transition-colors">
              <ArrowLeftOnRectangleIcon className="w-7 text-odin-white" />
              <p
                onClick={handleLogout}
                className="text-odin-white text-md sm:text-2xl cursor-pointer"
              >
                Logout
              </p>
            </div>
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
            : "absolute bg-odin-blue w-full px-5 py-4 flex flex-col gap-2 transition-opacity"
        }
      >
        <div className="text-odin-white text-md sm:text-2xl border-b-2 ">
          <div
            className="flex items-center cursor-pointer hover:text-odin-white/75"
            onClick={handleLogout}
          >
            <ArrowLeftOnRectangleIcon className="w-6 text-odin-white " />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

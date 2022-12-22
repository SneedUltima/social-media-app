import React from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  return (
    <>
      <div className="w-screen h-[100px] bg-odin-grey drop-shadow-xl flex items-center justify-between px-5 sm:px-10">
        <div>
          <h1 className="font-bold text-odin-white text-lg sm:text-4xl cursor-pointer">
            Odin-Book.
          </h1>
        </div>
        <div className="flex gap-12 items-center sm:items-baseline">
          <div>
            <p className="text-odin-white text-md sm:text-2xl">User</p>
          </div>
          <div className="hidden md:flex sm:gap-10 gap-4">
            <p className="text-odin-white text-md sm:text-2xl">Login</p>
            <p className="text-odin-white text-md sm:text-2xl">Signup</p>
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
            : "absolute bg-odin-grey w-full px-5 py-4 flex flex-col gap-2"
        }
      >
        <p className="text-odin-white text-md sm:text-2xl border-b-2">Login</p>
        <p className="text-odin-white text-md sm:text-2xl border-b-2">Signup</p>
      </div>
    </>
  );
};

export default Navbar;

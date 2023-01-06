import React from "react";
import guestImage from "../images/guestImage.png";

const UserList = () => {
  return (
    <div className="bg-odin-blue rounded-xl boxShadow mt-6 px-10 pb-3 w-fit">
      <div className="font-bold text-odin-white px-4 py-4 text-2xl">Users</div>
      <div className="flex flex-col gap-2 py-2 px-2">
        <div className="flex gap-2 items-center text-odin-white">
          <img src={guestImage} className="w-5 rounded-full" />
          <p>Friend 1</p>
        </div>
        <div className="flex gap-2 items-center text-odin-white">
          <img src={guestImage} className="w-5 rounded-full" />
          <p>Friend 1</p>
        </div>
        <div className="flex gap-2 items-center text-odin-white">
          <img src={guestImage} className="w-5 rounded-full" />
          <p>Friend 1</p>
        </div>
        <div className="flex gap-2 items-center text-odin-white">
          <img src={guestImage} className="w-5 rounded-full" />
          <p>Friend 1</p>
        </div>
      </div>
    </div>
  );
};

export default UserList;

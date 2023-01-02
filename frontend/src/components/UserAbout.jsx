import React from "react";

const UserAbout = ({ user }) => {
  return (
    <div className="bg-odin-blue rounded-xl boxShadow">
      <div className="font-bold text-odin-white px-4 py-4 text-2xl">
        About Me
      </div>
      <div className="text-odin-white px-4 py-4">{user.about}</div>
    </div>
  );
};

export default UserAbout;

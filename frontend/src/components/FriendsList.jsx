import React from "react";

const FriendsList = ({ user }) => {
  return (
    <div className="bg-odin-blue rounded-xl boxShadow">
      <div className="font-bold text-odin-white px-4 py-4 text-2xl">
        Friends
      </div>
      <div className="text-odin-white px-4 py-4">
        <p>Friend 1</p>
        <p>Friend 2</p>
        <p>Friend 3</p>
        <p>Friend 4</p>
        <p>Friend 5</p>
      </div>
    </div>
  );
};

export default FriendsList;

import React from "react";

const UserAbout = ({ user }) => {
  return (
    <div>
      <div>About</div>
      <div>{user.about}</div>
    </div>
  );
};

export default UserAbout;

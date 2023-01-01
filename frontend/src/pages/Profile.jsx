import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import UserInfo from "../components/UserInfo";

const Profile = () => {
  const { handle } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = () => {};

    return () => {
      fetchUser();
    };
  }, [handle]);

  return (
    <div>
      <UserInfo />
    </div>
  );
};

export default Profile;

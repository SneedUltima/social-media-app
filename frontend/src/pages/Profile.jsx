import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import UserInfo from "../components/UserInfo";

const Profile = () => {
  const { handle } = useParams();
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  console.log(handle);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/user/${handle}`, {
        method: "GET",
      });
      const json = await response.json();

      if (!response.ok) {
        setError(response.error);
      }
      if (response.ok) {
        console.log(json);
        setUser(json);
        console.log(user);
      }
    };

    return () => {
      fetchUser();
    };
  }, [handle]);

  return (
    <div>
      <p>kek</p>
      <p>{user.firstName}</p>
    </div>
  );
};

export default Profile;

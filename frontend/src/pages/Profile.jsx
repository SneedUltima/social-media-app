import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import UserAbout from "../components/UserAbout";

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
        setUser(json);
      }
    };

    return () => {
      fetchUser();
    };
  }, [handle]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center bg-odin-lightblue h-screen pb-4">
        <p>kek</p>
        <UserAbout user={user} />
      </div>
    </div>
  );
};

export default Profile;

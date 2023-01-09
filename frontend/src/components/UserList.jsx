import React from "react";
import guestImage from "../images/guestImage.png";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const response = await fetch("/user/getusers", {
        method: "GET",
      });
      const json = await response.json();

      if (!response.ok) {
        setLoading(false);
        setError(response.error);
      }

      if (response.ok) {
        setLoading(false);
        setUsers((prevState) => [...json]);
      }
    };

    return () => {
      fetchUsers();
    };
  }, []);

  return (
    <div className="bg-odin-blue rounded-xl boxShadow mt-6 px-10 pb-3 w-fit">
      <div className="flex justify-center">
        <div className="font-bold text-odin-white px-4 py-4 text-2xl">
          Users
        </div>
      </div>
      <div className="flex flex-col gap-2 py-2 px-2">
        <div
          className={
            !loading
              ? "flex flex-col gap-2 items-start text-odin-white"
              : "flex justify-center"
          }
        >
          {!loading ? (
            users.map((user) => (
              <div className="flex items-center gap-2" key={user._id}>
                <img
                  src={user.selectedFile}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <Link to={`${user._id}`}>
                  {user.firstName} {user.lastName}
                </Link>
              </div>
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;

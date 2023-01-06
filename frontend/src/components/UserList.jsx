import React from "react";
import guestImage from "../images/guestImage.png";
import { useEffect } from "react";
import { useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/user/getusers", {
        method: "GET",
      });
      const json = await response.json();

      if (!response.ok) {
        setError(response.error);
      }

      if (response.ok) {
        console.log(json);
        setUsers((prevState) => [...json]);
        console.log(users);
      }
    };

    return () => {
      fetchUsers();
    };
  }, []);

  return (
    <div className="bg-odin-blue rounded-xl boxShadow mt-6 px-10 pb-3 w-fit">
      <div className="font-bold text-odin-white px-4 py-4 text-2xl">Users</div>
      <div className="flex flex-col gap-2 py-2 px-2">
        <div className="flex flex-col gap-2 items-start text-odin-white">
          {users.map((user) => (
            <div className="flex items-center gap-2">
              <img
                src={user.selectedFile}
                className="w-8 h-8 rounded-full object-cover"
              />
              <p>
                {user.firstName} {user.lastName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;

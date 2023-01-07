import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import FriendsList from "../components/FriendsList";
import Navbar from "../components/Navbar";
import UserAbout from "../components/UserAbout";
import guestImage from "../images/guestImage.png";
import Post from "../components/Post";

const Profile = () => {
  const { handle } = useParams();
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

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

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/posts/myposts/${handle}`, {
        method: "GET",
      });
      const json = await response.json();

      if (response.ok) {
        setPosts(json);
      }
    };

    return () => {
      fetchPosts();
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col bg-odin-lightblue h-fit sm:h-screen pb-4 pt-4 px-8 2xl:px-60">
        <div className="flex items-center gap-2 mb-4">
          <img
            src={user.selectedFile ? user.selectedFile : guestImage}
            className="w-20 h-20 object-cover rounded-full"
          />
          <div>
            <p className="text-odin-white text-3xl font-bold">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-odin-white text-base font-bold">
              @{user.firstName}
              {user.lastName}
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
          <div className="flex flex-col gap-4 w-96">
            <UserAbout user={user} />
            <FriendsList user={user} />
          </div>
          <div className="flex flex-col items-center align-top w-full gap-4">
            {posts && posts.map((post) => <Post key={post._id} post={post} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

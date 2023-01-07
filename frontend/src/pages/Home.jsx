import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Postbox from "../components/Postbox";
import UserList from "../components/UserList";
import { PostsContext } from "../context/PostContext";

const Home = () => {
  const { dispatch, posts } = useContext(PostsContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/posts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_POSTS", payload: json });
      }
    };

    return () => {
      fetchPosts();
    };
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-center items-center sm:items-start bg-odin-lightblue min-h-screen">
        <div className="flex flex-col items-center pb-4 gap-8 w-6/6 sm:w-4/6">
          <Postbox />
          {posts && posts.map((post) => <Post key={post._id} post={post} />)}
        </div>
        <div className="mb-2">
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default Home;

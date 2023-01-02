import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Postbox from "../components/Postbox";
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
      <div className="flex flex-col items-center bg-odin-lightblue h-fit pb-4 gap-8">
        <Postbox />
        {posts && posts.map((post) => <Post key={post._id} post={post} />)}
      </div>
    </div>
  );
};

export default Home;

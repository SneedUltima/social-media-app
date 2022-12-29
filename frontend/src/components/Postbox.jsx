import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { PostsContext } from "../context/PostContext";

const Postbox = () => {
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(PostsContext);
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  let author;

  if (user) {
    author = `${user.firstName} ${user.lastName}`;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = { text, author };

    const response = await fetch("/posts", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      dispatch({ type: "CREATE_POST", payload: json });
      setText("");
      setError("");
    }
  };

  return (
    <div className="mx-5 sm:mx-10 mt-6 sm:3/5 md:w-2/5">
      <form
        action="#"
        className="flex flex-col gap-1 items-end"
        onSubmit={handleSubmit}
      >
        <textarea
          className="border-none boxShadow py-2 px-2 w-full h-32 resize-none rounded-xl bg-odin-blue border-odin-gold text-odin-white"
          cols="30"
          rows="30"
          placeholder="What's going on..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className=" bg-odin-green text-odin-white border-none w-20 font-bold rounded hover:bg-odin-green/75"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Postbox;

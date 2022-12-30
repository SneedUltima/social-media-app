import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { PostsContext } from "../context/PostContext";

const Commentbox = () => {
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(PostsContext);
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  let author;
  let likes = 0;

  if (user) {
    author = `${user.firstName} ${user.lastName}`;
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const post = { text, author, likes };

  //   const response = await fetch("/posts", {
  //     method: "POST",
  //     body: JSON.stringify(post),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const json = await response.json();

  //   if (!response.ok) {
  //     setError(json.error);
  //   }

  //   if (response.ok) {
  //     dispatch({ type: "CREATE_POST", payload: json });
  //     setText("");
  //     setError("");
  //   }
  // };

  return (
    <div className="mx-7 sm:mx-12 mt-6 sm:w-full">
      <form
        action="#"
        className="flex flex-col gap-1 items-end"
        // onSubmit={handleSubmit}
      >
        <textarea
          className="border-none boxShadow py-2 px-2 w-full h-32 resize-none rounded-xl bg-odin-lightblue border-odin-gold text-odin-white"
          cols="30"
          rows="30"
          placeholder="Add Comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className=" bg-odin-gold text-odin-white border-none w-20 font-bold rounded hover:bg-odin-gold/75"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Commentbox;

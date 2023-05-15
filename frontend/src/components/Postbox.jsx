import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { PostsContext } from "../context/PostContext";
import { PhotoIcon } from "@heroicons/react/24/solid";
import FileBase from "react-file-base64";

const Postbox = () => {
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(PostsContext);
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [selectImage, setSelectImage] = useState(false);
  const [postImage, setPostImage] = useState("");
  let author;
  let id;
  let selectedFile;
  let likes = 0;

  if (user) {
    author = `${user.firstName} ${user.lastName}`;
    id = user.id;
    selectedFile = user.selectedFile;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = { text, author, likes, id, selectedFile, postImage };

    const response = await fetch("https://socialscape-app.onrender.com/posts", {
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
    <div className="mx-5 sm:mx-10 mt-6 sm:3/5 md:w-3/5 boxShadow">
      <form
        action="#"
        className="flex flex-col justify-between"
        onSubmit={handleSubmit}
      >
        <textarea
          className=" focus:outline-none py-4 px-4 w-full h-32 resize-none bg-odin-blue text-odin-white rounded-t-xl"
          cols="30"
          rows="30"
          placeholder="What's going on..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="flex justify-between bg-odin-lightgrey py-2 px-4 rounded-b-xl">
          <button
            type="submit"
            className=" bg-odin-brightblue text-odin-white border-none w-20 font-bold rounded hover:bg-odin-brightblue/75 transition-colors"
          >
            Post
          </button>
          <div className="text-odin-neutral">
            {selectImage ? (
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) => setPostImage(base64)}
              />
            ) : (
              <PhotoIcon
                className="w-8 text-odin-neutral cursor-pointer"
                onClick={() => setSelectImage(true)}
              />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Postbox;

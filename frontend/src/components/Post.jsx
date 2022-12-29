import React from "react";
import formatRelative from "date-fns/formatRelative";
import { subDays } from "date-fns/esm";

const Post = ({ post }) => {
  return (
    <div className="mx-5 sm:mx-10 mt-6 sm:3/5 md:w-3/5">
      <div className="boxShadow py-2 px-2 w-full h-fit resize-none rounded-xl bg-odin-blue border-odin-gold text-odin-white">
        <div className="flex justify-between mb-4">
          <div className="font-bold">{post.author}</div>
          <div>
            Posted{" "}
            {formatRelative(subDays(new Date(post.createdAt), 3), new Date())}
          </div>
        </div>
        <div className="mb-4">{post.text}</div>
        <div className="mb-4">
          <div>{post.likes} Likes</div>
        </div>
        <div className="flex justify-between gap-4">
          <button className=" bg-odin-green text-odin-white border-none w-20 font-bold rounded hover:bg-odin-green/75 flex-1 py-1">
            Like
          </button>
          <button className=" bg-odin-green text-odin-white border-none w-20 font-bold rounded hover:bg-odin-green/75 flex-1 py-1">
            Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;

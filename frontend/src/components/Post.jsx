import React from "react";
import formatRelative from "date-fns/formatRelative";
import { subDays } from "date-fns/esm";
import { useState } from "react";
import {
  ChatBubbleBottomCenterTextIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import { HandThumbUpIcon as HandThumbsUpIconSolid } from "@heroicons/react/24/solid";

const Post = ({ post }) => {
  const [like, setLike] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = async (e) => {
    e.preventDefault();
    setLike((like) => !like);

    const likeCount = { likes: 1 };

    const response = await fetch("/posts/" + post._id, {
      method: "PATCH",
      body: JSON.stringify(likeCount),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setLikes(likes + 1);
    }
  };

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
          <div>{likes} Likes</div>
        </div>
        <div className="flex justify-between gap-4">
          <button
            className=" bg-odin-green text-odin-white border-none w-20 font-bold rounded hover:bg-odin-green/75 flex-1 py-1"
            onClick={handleLike}
          >
            <div className="flex justify-center gap-1">
              {!like ? (
                <HandThumbUpIcon className="w-5" />
              ) : (
                <HandThumbsUpIconSolid className="w-5" />
              )}
              {!like ? "Like" : "Liked"}
            </div>
          </button>
          <button className=" bg-odin-green text-odin-white border-none w-20 font-bold rounded hover:bg-odin-green/75 flex-1 py-1">
            <div className="flex justify-center gap-1">
              <ChatBubbleBottomCenterTextIcon className="w-5" />
              <p>Comment</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;

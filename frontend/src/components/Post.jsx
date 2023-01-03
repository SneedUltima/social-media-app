import React from "react";
import formatRelative from "date-fns/formatRelative";
import { subDays } from "date-fns/esm";
import { useState } from "react";
import {
  ChatBubbleBottomCenterTextIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import { HandThumbUpIcon as HandThumbsUpIconSolid } from "@heroicons/react/24/solid";
import Commentbox from "./Commentbox";
import Comment from "./Comment";
import guestImage from "../images/guestImage.png";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const [addComments, setAddComments] = useState(false);
  const [comments, setComments] = useState(false);
  const [like, setLike] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = async (e) => {
    e.preventDefault();

    const likeCount = { likes: !like ? +1 : -1 };

    const response = await fetch("/posts/" + post._id, {
      method: "PATCH",
      body: JSON.stringify(likeCount),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setLikes(!like ? likes + 1 : likes - 1);
      setLike((like) => !like);
    }
  };

  return (
    <div className="mx-5 sm:mx-10 w-5/6 md:w-3/5">
      <div className="boxShadow py-4 px-2 sm:px-4 w-full h-fit resize-none rounded-xl bg-odin-blue border-odin-gold text-odin-white">
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex gap-2">
            <img src={guestImage} alt="profile" className="w-5 rounded-full" />
            <div className="font-bold">
              <Link to={`${post.id}`}>{post.author}</Link>
            </div>
          </div>
          <div>
            Posted{" "}
            {formatRelative(subDays(new Date(post.createdAt), 3), new Date())}
          </div>
        </div>
        <div className="mb-6">{post.text}</div>
        <div className="mb-4 flex justify-between">
          <div>{likes} Likes</div>
          <div>
            <p
              className="cursor-pointer hover:underline hover:text-odin-white/90"
              onClick={() => setComments((comments) => !comments)}
            >
              {post.comments.length} Comments
            </p>
          </div>
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
          <button
            className=" bg-odin-green text-odin-white border-none w-20 font-bold rounded hover:bg-odin-green/75 flex-1 py-1"
            onClick={() => setAddComments((addComments) => !addComments)}
          >
            <div className="flex justify-center gap-1">
              <ChatBubbleBottomCenterTextIcon className="w-5" />
              <p>Comment</p>
            </div>
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <div className={!addComments ? "hidden" : "flex justify-center"}>
            <Commentbox post={post} />
          </div>
          <div className="flex items-center justify-center">
            <div
              className={
                !comments
                  ? "hidden"
                  : "flex flex-col justify-center items-center w-fit"
              }
            >
              {post.comments.length > 0 &&
                post.comments.map((comment) => (
                  <Comment key={comment._id} comment={comment} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

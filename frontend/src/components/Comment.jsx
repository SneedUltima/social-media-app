import React from "react";
import formatRelative from "date-fns/formatRelative";
import { subDays } from "date-fns/esm";
import guestImage from "../images/guestImage.png";

const Comment = ({ comment }) => {
  return (
    <div className="mx-7 sm:mx-12 mt-6 sm:w-full">
      <div className="border-none boxShadow py-4 px-2 sm:px-8 w-full h-fit resize-none rounded-xl sm:rounded-3xl bg-odin-lightblue border-odin-gold text-odin-white mb-4">
        <div className="flex flex-col sm:flex-row justify-between mb-2 gap-3 sm:gap-0">
          <div className="flex gap-2">
            <img src={guestImage} alt="profile" className="w-5 rounded-xl" />
            <p className="font-bold">{comment.author}</p>
          </div>
          <p className="text-sm sm:text-base">
            Commented{" "}
            {formatRelative(
              subDays(new Date(comment.commentDate), 3),
              new Date()
            )}
          </p>
        </div>
        <div className="mt-8 mb-6 sm:mb-0 sm:mt-6">
          <p>{comment.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;

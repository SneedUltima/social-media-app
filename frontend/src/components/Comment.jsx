import React from "react";
import formatRelative from "date-fns/formatRelative";
import { subDays } from "date-fns/esm";

const Comment = ({ comment }) => {
  return (
    <div className="mx-7 sm:mx-12 mt-6 sm:w-full">
      <div className="border-none boxShadow py-4 px-2 sm:px-8 w-full h-fit resize-none rounded-xl bg-odin-lightblue border-odin-gold text-odin-white mb-4">
        <div className="flex justify-between mb-2">
          <p>{comment.author}</p>
          <p>
            Commented{" "}
            {formatRelative(
              subDays(new Date(comment.commentDate), 3),
              new Date()
            )}
          </p>
        </div>
        <div>
          <p>{comment.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;

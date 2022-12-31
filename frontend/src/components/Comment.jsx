import React from "react";

const Comment = () => {
  return (
    <div className="mx-7 sm:mx-12 mt-6 sm:w-full">
      <div className="border-none boxShadow py-4 px-2 sm:px-8 w-full h-fit resize-none rounded-xl bg-odin-lightblue border-odin-gold text-odin-white mb-4">
        <div className="flex justify-between mb-2">
          <p>author</p>
          <p>date</p>
        </div>
        <div>
          <p>Comment Text</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;

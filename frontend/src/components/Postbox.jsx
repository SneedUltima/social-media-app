import React from "react";

const Postbox = () => {
  return (
    <div className="mx-5 sm:mx-10 mt-6 sm:3/5 md:w-2/5">
      <form action="#" className="flex flex-col gap-1 items-end">
        <textarea
          className="border-none boxShadow py-2 px-2 w-full h-32 resize-none rounded-xl bg-odin-blue border-odin-gold text-odin-white"
          cols="30"
          rows="30"
          placeholder="What's going on..."
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

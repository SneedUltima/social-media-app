import React from "react";
import Navbar from "../components/Navbar";
import Postbox from "../components/Postbox";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center bg-odin-lightblue h-screen">
        <Postbox />
      </div>
    </div>
  );
};

export default Home;

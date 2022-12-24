import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-odin-blue flex justify-center items-center ">
      <div className="flex flex-col sm:flex-row gap-10 items-center ">
        <div className="px-6">
          <h1 className="text-odin-gold text-5xl sm:text-6xl font-bold">
            odinbook.
          </h1>
        </div>
        <div>
          <form className="flex flex-col mt-10 py-8 px-8 justify-center gap-2  bg-odin-lightblue mb-20 rounded-2xl drop-shadow-md border-2">
            <label className="text-2xl text-odin-white font-roboto font-bold">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded"
              required
            />

            <label className="text-2xl text-odin-white font-roboto font-bold">
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 rounded"
              required
            />

            <button className="bg-odin-green text-2xl rounded-xl mt-2 transition duration-150 hover:bg-odin-green/75 text-nomad-black py-1 font-roboto cursor-pointer">
              Login
            </button>
            <button
              className="bg-odin-gold text-2xl rounded-xl mt-2 transition duration-150 hover:bg-odin-gold/75 text-nomad-black py-1 font-roboto cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

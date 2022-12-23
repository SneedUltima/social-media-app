import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [about, setAbout] = useState("");

  return (
    <div className="w-screen  sm:h-screen bg-odin-blue flex justify-center items-center ">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 items-center ">
        <div className="px-6">
          <h1 className="text-odin-gold text-5xl sm:text-6xl font-bold pt-4 sm:pt-0">
            odinbook.
          </h1>
        </div>
        <div className="sm:w-96">
          <form className="flex flex-col mt-10 py-8 px-8 justify-center gap-2  bg-odin-lightblue mb-20 rounded-2xl drop-shadow-md border-2">
            <label className="text-2xl text-odin-white font-roboto font-bold">
              First Name:
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="p-2 rounded"
              required
              placeholder="John"
            />

            <label className="text-2xl text-odin-white font-roboto font-bold">
              Last Name:
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="p-2 rounded"
              required
              placeholder="Doe"
            />

            <label className="text-2xl text-odin-white font-roboto font-bold">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded"
              placeholder="doe@mail.com"
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

            <label className="text-2xl text-odin-white font-roboto font-bold">
              About:
            </label>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="p-2 rounded resize-none"
              rows="5"
              placeholder="Add some additional information about yourself..."
            />

            <button className="bg-odin-gold font-bold text-2xl rounded-xl mt-2 transition duration-150 hover:bg-odin-gold/75 text-nomad-black py-1 font-roboto">
              Signup
            </button>
            <button className="bg-odin-green font-bold text-2xl rounded-xl mt-2 transition duration-150 hover:bg-odin-green/75 text-nomad-black py-1 font-roboto">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

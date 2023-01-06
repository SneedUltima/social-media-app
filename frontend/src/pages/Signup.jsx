import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/UseSignup";
import FileBase from "react-file-base64";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [about, setAbout] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const { signup, loading, error } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedFile);
    await signup(firstName, lastName, email, password, about, selectedFile);
    navigate("/");
  };

  return (
    <div className="w-screen h-auto sm:h-screen bg-odin-blue flex justify-center items-center ">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 items-center">
        <div className="px-6">
          <h1 className="text-odin-gold text-5xl sm:text-6xl font-bold pt-4 sm:pt-0">
            odinbook.
          </h1>
        </div>
        <div className="sm:w-96">
          <form
            className="flex flex-col mt-10 py-8 px-8 justify-center gap-2  bg-odin-lightblue mb-20 rounded-2xl drop-shadow-md border-2"
            onSubmit={handleSubmit}
          >
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
            <label className="text-2xl text-odin-white font-roboto font-bold">
              Profile Image:
            </label>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setSelectedFile(base64)}
            />

            <button
              disabled={loading}
              type="submit"
              className="bg-odin-gold text-2xl rounded-xl mt-2 transition duration-150 hover:bg-odin-gold/75 text-nomad-black py-1 font-roboto"
            >
              Create Account
            </button>
            <button
              disabled={loading}
              type="button"
              className="bg-odin-green text-2xl rounded-xl mt-2 transition duration-150 hover:bg-odin-green/75 text-nomad-black py-1 font-roboto"
              onClick={() => navigate("/login")}
            >
              Login with Account
            </button>
            {error && <div className="text-red-700">{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

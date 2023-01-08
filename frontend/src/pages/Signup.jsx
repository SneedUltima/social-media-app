import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/UseSignup";
import FileBase from "react-file-base64";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Spinner from "../components/Spinner";

const Signup = () => {
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
  };

  return (
    <div className="w-screen h-auto sm:min-h-screen bg-odin-blue flex justify-center items-center ">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 items-center">
        <div className="px-6">
          <h1 className="text-odin-gold text-5xl sm:text-6xl font-bold pt-4 sm:pt-0">
            <span className="text-odin-white">social</span>
            <span className="text-odin-brightblue">scape.</span>
          </h1>
          <ul className="text-odin-white flex flex-col gap-4 mt-4 font-bold text-xl sm:text-2xl font-roboto">
            <li className="flex gap-2 items-center">
              <CheckCircleIcon className="w-7 h-7 text-odin-brightblue" />
              <p>Express your thoughts</p>
            </li>
            <li className="flex gap-2">
              <CheckCircleIcon className="w-7 h-7 text-odin-brightblue" />
              <p>Connect with others</p>
            </li>
            <li className="flex gap-2">
              <CheckCircleIcon className="w-7 h-7 text-odin-brightblue" />
              <p>Free</p>
            </li>
          </ul>
        </div>
        <div className="sm:w-96 w-64">
          <form
            className="flex flex-col mt-10 py-8 px-8 justify-center gap-2  bg-odin-lightblue mb-20 rounded-2xl drop-shadow-md border-2"
            onSubmit={handleSubmit}
          >
            <label className="text-2xl text-odin-white font-roboto">
              First Name:
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="p-2 rounded bg-odin-neutral"
              required
              placeholder="John"
            />

            <label className="text-2xl text-odin-white font-roboto">
              Last Name:
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="p-2 rounded bg-odin-neutral"
              required
              placeholder="Doe"
            />

            <label className="text-2xl text-odin-white font-roboto">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded bg-odin-neutral"
              placeholder="doe@mail.com"
              required
            />

            <label className="text-2xl text-odin-white font-roboto">
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 rounded bg-odin-neutral"
              required
            />

            <label className="text-2xl text-odin-white font-roboto">
              About:
            </label>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="p-2 rounded resize-none bg-odin-neutral"
              rows="5"
              placeholder="Add some additional information about yourself..."
              required
            />
            <label className="text-2xl text-odin-white font-roboto">
              Profile Image:
            </label>
            <div className="text-odin-white">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) => setSelectedFile(base64)}
              />
            </div>

            <button
              disabled={loading}
              type="submit"
              className="bg-odin-brightblue text-2xl rounded-xl mt-2 transition-colors hover:bg-odin-brightblue/75 text-odin-white font-bold py-1 font-roboto flex items-center justify-center"
            >
              {loading && <Spinner />}Create Account
            </button>
            <button
              disabled={loading}
              type="button"
              className="bg-odin-white text-2xl rounded-xl mt-2 transition-colors hover:bg-odin-white/75 text-nomad-black py-1 font-roboto"
              onClick={() => navigate("/login")}
            >
              Login with Account
            </button>
            {error && (
              <div className="flex justify-center text-odin-red font-bold mt-2 text-lg">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const { login, error, loading } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(email, password);
    navigate("/");
  };

  return (
    <div className="w-screen min-h-screen bg-odin-blue flex justify-center items-center ">
      <div className="flex flex-col sm:flex-row gap-10 items-center ">
        <div className="px-6">
          <h1 className="text-odin-gold text-5xl sm:text-6xl font-bold">
            <span className="text-odin-white">social</span>
            <span className="text-odin-brightblue">scape.</span>
          </h1>
        </div>
        <div>
          <form
            className="flex flex-col mt-10 py-8 px-8 justify-center gap-2  bg-odin-lightblue mb-20 rounded-2xl drop-shadow-md border-2"
            onSubmit={handleLogin}
          >
            <label className="text-2xl text-odin-white font-roboto">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded bg-odin-neutral"
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

            <button
              type="submit"
              className="bg-odin-brightblue text-2xl rounded-xl mt-2 hover:bg-odin-brightblue/75 transition-colors text-odin-white font-bold py-1 font-roboto cursor-pointer flex items-center justify-center"
            >
              {loading && <Spinner />}Login
            </button>
            <button
              type="button"
              className="bg-odin-white text-2xl rounded-xl mt-2 hover:bg-odin-white/75 transition-colors text-nomad-black  py-1 font-roboto cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Create Account
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

export default Login;

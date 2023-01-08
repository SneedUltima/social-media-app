import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const { dispatch } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();

  const signup = async (
    firstName,
    lastName,
    email,
    password,
    about,
    selectedFile
  ) => {
    setLoading(true);
    setError(null);

    const response = await fetch("/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        about,
        selectedFile,
      }),
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setLoading(false);
    }

    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));

      dispatch({ type: "LOGIN", payload: json });

      setLoading(false);
      navigate("/");
    }
  };

  return { signup, error, loading };
};

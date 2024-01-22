import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    axios
      .post("http://localhost:5000/api/login", loginData)
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Error logging in:", error.response.data.message);
      });
  };

  return (
    <div className="border-solid border-2 border-sky-500 rounded-lg">
      <h2 className="text-center mt-4">Login</h2>
      <p className="text-center m-4">{message}</p>
      <form className="form flex flex-col align-items justify-center m-4">
        <label>
          Username:
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full max-w-xs mt-3 mb-3"
            value={loginData.username}
            onChange={(e) =>
              setLoginData({ ...loginData, username: e.target.value })
            }
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs mt-3"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
        </label>
        <button
          type="button"
          className="btn btn-accent mt-8"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

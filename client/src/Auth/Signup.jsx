import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [signupData, setSignupData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleSignup = () => {
    axios
      .post("http://localhost:5000/api/signup", signupData)
      .then((response) => {
        if (response && response.data) {
          setMessage(response.data.message);
        } else {
          console.error("Invalid response from the server:", response);
        }
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          console.error("Error signing up:", error.response.data.error);
        } else {
          console.error("Unknown error during signup:", error);
        }
      });
  };

  return (
    <div className="border-solid border-2 border-sky-500 rounded-lg">
      <h2 className="text-center mt-4">Signup</h2>
      <p className="text-center m-4">{message}</p>
      <form className="form flex flex-col align-items justify-center m-4">
        <label>
          Username:
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full max-w-xs mt-3 mb-3"
            value={signupData.username}
            onChange={(e) =>
              setSignupData({ ...signupData, username: e.target.value })
            }
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs mt-3"
            value={signupData.password}
            onChange={(e) =>
              setSignupData({ ...signupData, password: e.target.value })
            }
          />
        </label>
        <button
          type="button"
          className="btn btn-accent mt-8"
          onClick={handleSignup}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;

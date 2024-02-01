import React, { useState } from "react";
import { Link } from "react-scroll";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";

const MenuItem = ({ label, link }) => (
  <li>
    <a href={`#${link}`}>{label}</a>
  </li>
);

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };
  return (
    <header id="Home">
      <nav className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <MenuItem label="Home" link="Home" />
              <MenuItem label="About" link="About" />
              <MenuItem label="Contacts" link="Contacts" />
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">NightDev</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <MenuItem label="Home" link="Home" />
            <MenuItem label="About" link="About" />
            <MenuItem label="Contacts" link="Contacts" />
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          <button className="btn btn-sky-500" onClick={handleLoginClick}>
            Login
          </button>
          <button className="btn btn-emerald-500" onClick={handleSignupClick}>
            SignUp
          </button>
        </div>
      </nav>
      {/* Display Login component if showLogin is true */}
      {showLogin && <Login />}

      {/* Display Signup component if showSignup is true */}
      {showSignup && <Signup />}
    </header>
  );
}

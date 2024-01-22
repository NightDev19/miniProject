import React from "react";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import "./App.css";

function App() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold underline text-center mb-4">
        Vite React + Flask
      </h1>
      <div className="flex items-center justify-evenly mt-6">
        <div className="p-4 border rounded">
          <Login />
        </div>
        <div className="p-4 border rounded">
          <Signup />
        </div>
      </div>
    </div>
  );
}

export default App;

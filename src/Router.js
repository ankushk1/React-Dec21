import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";

const Router = () => {
  return (
    <div className="text-center">
      <div>
        <li>
          <NavLink
            end
            to="/"
            className={({ isActive }) => (isActive ? "text-danger" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive ? { fontStyle: "italic" } : undefined
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) => (isActive ? "text-danger" : "")}
          >
            Signup
          </NavLink>
        </li>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup/:id/" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default Router;

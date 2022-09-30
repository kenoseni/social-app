import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/core/Home";
import { Users } from "./components/user/Users";
import { Signup } from "./components/user/Signup";

export const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

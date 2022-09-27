import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./components/core/Home";

export const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

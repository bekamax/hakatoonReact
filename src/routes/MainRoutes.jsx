import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Registor from "../pages/registor/Registor";
import Login from "../pages/logIn/Login";
import Profile from "../pages/profile/Profile";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registor" element={<Registor />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default MainRoutes;

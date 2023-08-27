import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./assets/login/Login";
import Register from "./assets/register/Register";
import Homepage from "./assets/homepage/Homepage";

const App = () => {

  const user = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        {user && <Route path="/" element={<Homepage />} />}
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

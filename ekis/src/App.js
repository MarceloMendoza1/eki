import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NewUser from "./components/NewUser";
import Login from "./components/Login";
import { postMeRequest } from "./redux/login";
import User from "./components/User";


function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login); 

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singup" element={<NewUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myuser" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;

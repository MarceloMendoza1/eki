import React from "react";
//import axios from "axios";
import { useNavigate } from "react-router";

const User = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || [];

  return (
    <div class="pt-6">
      <div class="p-6"></div>
        <div>
          <h1 class="is-size-2">
            Bienvenido {user.name}
          </h1>
          <div class="p-6"></div>
          <div class="p-6"></div>
        </div>
    </div>
  );
};

export default User;
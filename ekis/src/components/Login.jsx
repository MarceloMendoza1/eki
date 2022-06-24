import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLoginRequest } from "../redux/login";
import useInput from "../hooks/useInputs";
import { useNavigate } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useInput();
  const password = useInput();

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postLoginRequest({ email, password }));
    setLoading(true);
    setTimeout(() => navigate("/"), 3000);
  };

  return (
    <>
     
      <div >
        <div >
          <h3 class="title has-text-centered">Ingresa </h3>
          <form onSubmit={handleSubmit}>
            <label >Email</label>
            <input
              onChange={email.onChange}
              type="email"
              placeholder="Ej: mar1@hotmail.com"
            />
            <label>Contraseña</label>
            <input
              onChange={password.onChange}
              type="password"
              placeholder="contraseña"
            />
                <button class="button is-black is-pulled-right" type="submit">
                Entrar
                </button>
            </form>
        </div>
      </div>
      <div class="column my-6"></div>
      <div class="column my-6"></div>
    </>
  );
};

export default Login;
import React, { useEffect, useState } from "react";
//import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
//import { CgProfile } from "react-icons/cg";

import { postLogoutRequest, postMeRequest } from "../redux/login";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const userJson = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    dispatch(postLogoutRequest());
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav
      role="navigation"
      aria-label="main navigation"
    >
    

      <div class="navbar-menu" id="navOptions">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              {user ? (
                <>
                  <div
                    class="column is-flex is-clickable"
                    onClick={() => navigate("/myuser")}
                  >
                  </div>
                  <p class="button" color="black" onClick={handleLogout}>
                    <strong class="has-text-black-bis">Logout</strong>
                  </p>
                </>
              ) : (
                <>
                  <p class="button" color="black">
                    <Link to={"/singup"}>
                      <strong class="has-text-black-bis">Sign up</strong>
                    </Link>
                  </p>
                  <Link to={"/login"}>
                    <p class="button">Log in</p>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
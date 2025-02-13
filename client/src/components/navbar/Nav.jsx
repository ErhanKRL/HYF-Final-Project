import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import UserFavicon from "../userFavicon/UserFavicon";
import SignUp from "../signUp/SignUpComponent";
import Login from "../logIn/LogInComponent";
import AddressSearch from "../SearchBar";
import { useApplicationContext } from "../../context/applicationContext";
import logo from "../../components/assets/Logo.png";

import TEST_ID from "../Nav.testid";

const Nav = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const { isLoggedIn, setIsLoggedIn, setUser } = useApplicationContext();

  useEffect(() => {
    if (isLoggedIn) {
      setShowLoginForm(false);
      setShowSignUpForm(false);
    }
  }, [isLoggedIn]);

  return (
    <>
      <div className="navbar">
        <img src={logo} alt="logo" className="logo"></img>

        <AddressSearch />

        <ul className="navbar-items">
          <li className="navbar-item">
            <Link
              to="/"
              data-testid={TEST_ID.linkToHome}
              className="navbar-link"
            >
              Home
            </Link>
          </li>
          <li className={"navbar-item" + (isLoggedIn ? "" : " hide")}>
            <Link
              to="/favorites"
              data-testid={TEST_ID.linkToHome}
              className="navbar-link"
            >
              Favorites
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>

          <li
            className={"navbar-item login-btn" + (isLoggedIn ? " hide" : "")}
            onClick={() => {
              if (showSignUpForm) {
                setShowSignUpForm(!showSignUpForm);
              }
              setShowLoginForm(!showLoginForm);
            }}
          >
            <a href="#" className="navbar-link">
              Log In
            </a>
          </li>
          <li
            className={"navbar-item logOut-btn" + (!isLoggedIn ? " hide" : "")}
            onClick={() => {
              setIsLoggedIn(false);
              localStorage.removeItem("user_token");
              localStorage.removeItem("user_name");
              localStorage.removeItem("user_id");
              setUser({ name: "", token: "", id: "" });
            }}
          >
            <Link to="/" className="navbar-link">
              Log Out
            </Link>
          </li>
          <UserFavicon />
        </ul>
      </div>
      <Login
        showLoginForm={showLoginForm}
        setShowLoginForm={setShowLoginForm}
        showSignUpForm={showSignUpForm}
        setShowSignUpForm={setShowSignUpForm}
      />
      <SignUp
        showSignUpForm={showSignUpForm}
        setShowSignUpForm={setShowSignUpForm}
        showLoginForm={showLoginForm}
        setShowLoginForm={setShowLoginForm}
      />
    </>
  );
};

export default Nav;

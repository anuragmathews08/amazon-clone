import React, { useState } from "react";
import amazonLogo from "../../assets/amazon_logo_black.png";
import classes from "./Login.module.css";

import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const registerHandler = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        history.push("/");
      })
      .catch((error) => {});
  };

  return (
    <div className={classes.login__page}>
      <Link to="/">
        <img
          src={amazonLogo}
          alt="amazon_logo"
          className={classes.amazon__logo}
        />
      </Link>

      <div className={classes.login__container}>
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            onClick={(event) => loginHandler(event)}
            type="submit"
            className={classes.signIn__button}
          >
            Sign in
          </button>
        </form>
        <p>
          By siging-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, out Cookies Notice and our Interest-Based Ads
          Notice.
        </p>

        <button
          onClick={(event) => registerHandler(event)}
          className={classes.register__button}
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;

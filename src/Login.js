import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="text" />
          <button className="login_signInButton">Continue</button>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        </form>
      </div>

      <p>New to Amazon?</p>
      <button>Create your Amazon account</button>

    </div>
  );
}

export default Login;

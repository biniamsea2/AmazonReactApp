import React, {useState} from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import{auth} from "./Firebase";

function Login() {
    const history = useHistory();
    // checking email 
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const login = (event) =>{
        //stops refresh
        event.preventDefault()
        //login logic
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //logged in, redirect to homepage
            history.push('/');
        })
        .catch(e => alert(e.message));
    };

    const register = (event) =>{
        //stops refresh
        event.preventDefault()
        //register logic
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth =>{
                //created a user and logged in, redirect to homepage
                history.push('/');
            })
            .catch(e => alert(e.message));
        };
    
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
          <input value = {email} onChange={event =>setEmail(event.target.value)} type="email" />
          <h5>Password</h5>
          <input value = {password} onChange={event =>setPassword(event.target.value)} type="password" />
          <button onClick={login} type ="submit"className="login_signInButton">Continue</button>
        <p>By continuing, you agree to Amazon's <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088">Conditions of Use </a> and <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">Privacy Notice</a>.</p>
        </form>
      <p className="newToAmazon">New to Amazon?</p>
      <button onClick={register} className="login_registerButton">Create your Amazon account</button>
      </div>

    </div>
  );
  }

export default Login;

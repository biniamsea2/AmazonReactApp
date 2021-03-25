import React, { useEffect } from "react";
import "./App.css";
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login";
import {useStateValue} from "./StateProvider";
import {auth} from "./Firebase";
import SecondNav from "./SecondNav";

function App() { 
  //used for the listener
  const[{ user }, dispatch] = useStateValue();
  
  // code which runs on a given condition......useEffect
  useEffect(() => {
    //create a listener that pays attention when the user logs in and out
    //everytime the authentication changes, get the authUser,
    const unsubscribe = auth.onAuthStateChanged((authUser) =>{
      if(authUser) {
        //user is logged in..push them into the data layer
        dispatch({
          type:"SET_USER",
          user: authUser
        })
      }else{
        //the user is logged out. set the user to null
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });
    return () => {
      // clean up operation
      unsubscribe();
    }
    
    //will run once when the app component loads and everytime when changes are made to whatever we put in the []
  }, []);


console.log("user is ===>>>", user);
  
  return (
    // all routes under Router 
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <SecondNav/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          {/* last route is always the default route */}
          <Route path="/">
            {/* added the header component */}
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

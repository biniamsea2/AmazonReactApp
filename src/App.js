import React from "react";
import "./App.css";
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login";
import {useStateValue} from "./StateProvider";

function App() {
  const[{basket}, dispatch] = useStateValue();


  
  return (
    // all routes under Router 
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header/>
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

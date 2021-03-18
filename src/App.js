import React from "react";
import "./App.css";
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    // all routes under Router 
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout route</h1>
          </Route>
          <Route path="/login">
            <h1>Login page</h1>
          </Route>
          {/* last route is always the default route */}
          <Route path="/">
            {/* added the header component */}
            <Header/>
            <h1>Home page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

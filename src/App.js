import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    // put everything in the router
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout route</h1>
          </Route>
          <Router path="/login">
            <h1>Login page</h1>
          </Router>
          {/* last route is always the default route */}
          <Route path="/">
            <h1>Home page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

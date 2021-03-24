import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import LocationOn from "@material-ui/icons/LocationOn";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  // created a function which checks if the user is signed in, if so log them out,
  // this function is used for our link below (line 44)
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      {/* Link gives us the clickable image (the hand) when we hover over the image and "to" send us to a different route */}
      <Link to="/">
        {/* logo on the left => img */}
        <img
          className="header_logo"
          src="https://d24wuq6o951i2g.cloudfront.net/img/events/id/457/457529896/assets/b71.amazon_logo_RGB_REV.png"
          alt="amazon logo"
        />
      </Link>
      <LocationOn className="LocationOn" />
      <Link to="/login" className="SelectAddress">
        <div className="header_option">
          <span className="header_optionLineOne">Hello</span>
          <span className="header_optionLineTwo">Select your Address</span>
        </div>
      </Link>

      {/* search box */}
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/* 2 links to the right of the search bar */}
      <div className="header_nav">
        {/* first link */}
        {/* if they are not logged in then take them to the login page */}
        <Link to={!user && "/login"} className="header_link">
          <div onClick={login} className="header_option">
            <span className="header_optionLineOne">Hello, {user?.email}</span>
            {/* if there is a user, i want it to say sign out, and if there is no user say sign in */}
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        {/* second link */}
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
      </div>

      {/* basket icon with number */}
      <Link to="/checkout" className="header_link">
        <div className="header_optionBasket">
          {/* {/* basket icon */}
          <ShoppingCart />
          {/* number of items in basket */}
          <span className="header_optionLineTwo header_optionBasketCount">
            {basket?.length}
          </span>
        </div>
      </Link>

      
    </nav>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="header">
        {/* Link gives us the clickable image (the hand) when we hover over the image and "to" send us to a different route */}
      <Link to="/login">
        {/* logo on the left => img */}
        <img
          className="header_logo"
          src="https://d24wuq6o951i2g.cloudfront.net/img/events/id/457/457529896/assets/b71.amazon_logo_RGB_REV.png"
          alt="amazon logo"
        />
      </Link>

      {/* search box */}

      {/* 3 links to the right of the search bar */}

      {/* basket item with number */}
    </nav>
  );
}

export default Header;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Navbar.css";
import "material-icons/iconfont/material-icons.css";
import Logo from "./images/amazon.png";

function Navbar() {
  const [numberOfItems, setNumberOfItems] = useState(0);

  return (
    <div>
      <nav className="Navbar">
        <div className="logo-container">
          <Link to="/">
            <img className="amazon-logo" src={Logo} alt="Amazon Logo" />
          </Link>
        </div>
        <div className="items">
          <div className="search-container">
            <input type="text" placeholder="search" />
            <li>
              <i className="material-icons" id="search">
                search
              </i>
            </li>
          </div>
          <div className="nav-links">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/return">Return & Orders</Link>
            </li>
            <li>
              <Link to="/prime">Amazon Prime</Link>
            </li>
            <li>
              <Link to="/cart">
                <i className="material-icons" id="basket">
                  shopping_basket
                </i>{" "}
                {numberOfItems}
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

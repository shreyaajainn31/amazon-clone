import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './Navbar.css';
import 'material-icons/iconfont/material-icons.css';

function Navbar(){

    return (
        <div>
            <nav className = 'Navbar'>
            <div className= 'amazon-logo'> <img src = "/amazon.png" alt = 'amazon-logo'/>  </div>
            <div className = 'items'>
                <div className = 'search-container'>
                <input type = "text" placeholder="search"></input>
                <li><i className="material-icons" id = "search">search</i></li>
                </div>
                <li>Login</li>
                <li>Return & Orders</li>
                <li> Amazon Prime</li>
                <li><i className="material-icons" id = "basket">shopping_basket</i></li>
            </div>
            </nav>
        </div>
    );


}

export default Navbar;
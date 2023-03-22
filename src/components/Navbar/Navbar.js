import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './Navbar.css';
import 'material-icons/iconfont/material-icons.css';
import Logo from "./images/amazon.png";
import {useNavigate, Link} from "react-router-dom";

function Navbar(){
    const navigate = useNavigate();

    const [numberOfItems, setNumberOfItems] = useState(0);


    return (
        <div>
            <nav className = 'Navbar'>
            <div className = 'items'>
                <div className = 'search-container'>
                <input type = "text" placeholder="search"></input>
                <li><i className="material-icons" id = "search">search</i></li>
                </div>
                <li><Link to ="/login">Login</Link></li>
                <li><Link to ="/return">Return & Orders</Link></li>
                <li><Link to = "/prime"> Amazon Prime </Link></li>
                <li><i className="material-icons" id = "basket"><Link to ="/cart">shopping_basket</Link></i> {numberOfItems}</li>
            </div>
            </nav>
        </div>
    );

}

export default Navbar;
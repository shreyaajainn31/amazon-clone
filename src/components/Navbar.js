import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavLink } from 'react-router-dom';

function Navbar(){

    return (
        <div>
            <nav className = 'Navbar'>
            <ul>
                <li NavLink exact to = "/"></li>
            </ul>
            </nav>
        </div>
    );


}

export default Navbar;
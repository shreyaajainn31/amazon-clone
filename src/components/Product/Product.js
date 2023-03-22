import React,{useState} from "react";
import './Product.css';
import Gaming from "./images/gaming.webp";
import Computer from "./images/computer.webp";
import Holiday from "./images/holiday.webp";
import {useNavigate, Link} from "react-router-dom";
import Amazon from "./images/amazon.png";
function Product(){
    return (
        <div>
            <ul className = 'products'>
                <li> Gaming Accesories
                    <img src = {Gaming}/>
                    <Link to ="/gaming"> Show more </Link>
                </li>
                <li>Computers and Accesories
                    <img src = {Computer}/>
                    <Link to ="/computer"> Show more </Link>
                </li>
                <li>Holiday deals
                    <img src = {Holiday}/>
                    <Link to ="/deals"> Show more </Link>
                </li>
                <div className = 'sign-in'>
                    <li > Sign in for the best experience 
                    <button> Sign in securely</button>
                    </li>
                </div>
                {/* <div className = "image">
                   <img src = {Amazon}/> 
                </div> */}
                


            </ul> 
        </div>
    );
}

export default Product;
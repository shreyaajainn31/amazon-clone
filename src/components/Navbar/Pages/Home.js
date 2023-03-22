import React from "react";
import Navbar from "../Navbar";
// src/components/images/home.jpg
import Image from '../images/home.jpg';
import './Pages.css';
function Home(){

    return (
        <div>
            <Navbar/>
           <img src = {Image} className = 'img'/>
           <p className = "home-text">You are on amazon.com. You can also go to Amazon India for million of products with fast local delivery. <a href= "https://www.amazon.in/" target="_blank"> Click here to go to amazon.in</a></p>
            <ul className = 'products'>
                <li>Gaming Accesories</li>
                <li>Computers and Accesories</li>
                <li>Holiday deals</li>
            </ul> 

           
        </div>
    );

}
export default Home;
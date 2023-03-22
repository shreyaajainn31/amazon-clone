import React from "react";
import Navbar from "../Navbar";
import Image from '../images/home.jpg';
import Product from "../../Product/Product";
import './Pages.css';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="image-container">
        <img src={Image} className="img" />
        <p className="home-text">
          You are on amazon.com. You can also go to Amazon India for millions of products with fast local delivery.{" "}
          <a href="https://www.amazon.in/" target="_blank">
            Click here to go to amazon.in
          </a>
        </p>
      </div>
      <Product />
    </div>
  );
}

export default Home;

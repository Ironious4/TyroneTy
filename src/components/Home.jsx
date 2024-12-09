import React, { useState, useEffect } from "react";
import Clock from "./Clock";
import Footer from "./Footer";
import "./home.css";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index
  const images = [
    "/suit.jpg",
    "/tranquil.jpg",
    "/hotel.jpg",
    "/office.jpg",
    "/cool.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="home">
      <h1 className="welcome">Welcome to my website!</h1>

      <div className="clock-container">
        <Clock />
      </div>

      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Slide effect
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index}`} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;

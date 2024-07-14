import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = ["c1.jpg", "c2.jpg", "c3.jpg"]; // Add your image paths here

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 8000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <div className="carousel">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <img src={slide} alt={`Slide ${index + 1}`} />
            </div>
          ))}
          <button
            className="carousel-control prev"
            onClick={() =>
              setCurrentIndex(
                (currentIndex - 1 + slides.length) % slides.length
              )
            }
          >
            ‹
          </button>
          <button
            className="carousel-control next"
            onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
          >
            ›
          </button>
          <ol className="carousel-indicators">
            {slides.map((_, index) => (
              <li
                key={index}
                className={`carousel-bullet ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                •
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="bg-img h-full ">
        <h1 className="shadow-2xl font-bold text-white text-center text-4xl middle sm:text-center ">
          Welcome to Notes <span className="text-logoColor bg-black">HUB</span>
        </h1>
      </div>
    </>
  );
}

export default Home;

import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = ["c1.webp", "c4.webp", "c5.webp"]; // Add your image paths here

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 8000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const [text, setText] = useState("Free Content for Studnets");

  useEffect(() => {
    const texts = [
      "10th 11th 12th ",
      "BTech",
      "Compitative Examination",
      "And Many More",
    ];
    let currentIndex = 0;

    const changeText = () => {
      setText(texts[currentIndex]);
      currentIndex = (currentIndex + 1) % texts.length;
    };

    changeText();

    const intervalId = setInterval(changeText, 4000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

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
      <div className="section2">
        <div>
          <h1 className="sec2-text">
            Our Main <span className="yellow">AIM</span> To Give &nbsp;
            <span className="blue">Free</span> Notes and Books
          </h1>
          <h2 className="sec2-text ">
            Stay <span className="blue">Connected</span> For more{" "}
            <span className="yellow">Updates</span>{" "}
          </h2>
        </div>

        <div class="container">
          <span class="text first-text">Content We have&nbsp;</span>
          <span class="text sec-text">{text}</span>
        </div>
        <div>
          <h1 className="sec2-text text2">
            For <span className="yellow">Content</span> Check Out{" "}
            <span className="blue">NavBar</span> For Content{" "}
            <span className="yellow">Removal</span> Go On{" "}
            <span className="blue">Contant Us</span> Page
          </h1>
        </div>
      </div>
    </>
  );
}

export default Home;

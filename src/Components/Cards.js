import React from "react";
import "./Cards.css";

function Card({ image, download, name }) {
  return (
    <>
      <div className="card p-8">
        <div className="card__body">
          <img src={image} class="card__image" alt="image-card" w />
          <h2 className="card__title pt-10 text-center font-bold">{name}</h2>
        </div>
        <button className="card__btn">
          <a href={download}>Download</a>
        </button>
      </div>
    </>
  );
}

export default Card;

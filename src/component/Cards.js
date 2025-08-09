import React, { useState } from "react";
import "./Cards.css";

function Card({
  image,
  download,
  name,
  cardId,
  userId,
  isFavoritedInitial = false,
}) {
  const [isFavorited, setIsFavorited] = useState(isFavoritedInitial);

  // ✅ Check if user is logged in by seeing if token exists in localStorage
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  const toggleFavorite = async () => {
    if (!isLoggedIn) return; // guard

    const newFav = !isFavorited;
    setIsFavorited(newFav);

    try {
      const response = await fetch(
        `https://your-backend.com/api/users/${userId}/favorites`,
        {
          method: newFav ? "POST" : "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ cardId }),
        }
      );

      if (!response.ok) throw new Error("Failed to update favorite");
    } catch (err) {
      console.error(err);
      setIsFavorited(!newFav); // revert on error
    }
  };

  return (
    <div className="card p-8">
      <div className="card__body">
        <img src={image} className="card__image" alt="image-card" />
        <h2 className="card__title pt-10 text-center font-bold">{name}</h2>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button className="card__btn">
          <a href={download} download>
            Download
          </a>
        </button>

        {/* Only show heart if the user is logged in */}
        {isLoggedIn && (
          <button
            onClick={toggleFavorite}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "24px",
              color: isFavorited ? "red" : "gray",
            }}
          >
            {isFavorited ? "❤️" : "🤍"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import HomesUpdateForm from "./HomesUpdateForm";

function HomesItem({ home, onUpdateHome, onDeleteHome }) {
  const id = home.id;
  console.log(id);

  // console.log(id);
  const [loveCount, setLoveCount] = useState(0);
  const [isLoved, setIsLoved] = useState(false);
  const [comment, setComment] = useState("");
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  function handleLoveClick() {
    if (isLoved) {
      setLoveCount(loveCount - 1);
    } else {
      setLoveCount(loveCount + 1);
    }
    setIsLoved(!isLoved);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const comment = formData.get("comment");
    setComment(comment); // Store the comment in state
  };

  function handleUpdateClick() {
    setShowUpdateForm(true);
  }

  function handleDeleteClick() {
    // add fetch request
    fetch(`http://localhost:4300/homes/${home.id}`, {
      method: "DELETE",
    }).then(() => onDeleteHome(home.id));
  }

  return (
    <div className="homes-item">
      <div className="homes-item-images">
        {home && Array.isArray(home.images)
          ? home.images.map((image, index) => (
              <img key={index} src={image} alt={` ${index + 1}`} />
            ))
          : null}
      </div>
      <h2>{home.title}</h2>
      <p>Bedrooms: {home.bedrooms}</p>
      <p>Bathrooms: {home.bathrooms}</p>
      <p>Living Room: {home.livingroom ? "Yes" : "No"}</p>
      {/* Render the comment if there is one */}
      {comment && <p>{comment}</p>}
      <div className="homes-item-actions">
        <button
          className={`love-button ${isLoved ? "loved" : ""}`}
          onClick={handleLoveClick}
        >
          <FontAwesomeIcon icon={faHeart} />
          <span className="love-count">{loveCount}</span>
        </button>
      </div>
      {/* Form to submit a comment */}
      <form onSubmit={handleSubmit}>
        <label>
          Comment:
          <input type="text" name="comment" />
        </label>
        <button id="btn" type="submit">
          Submit
        </button>
      </form>
      <div id="btn">
        <button onClick={handleUpdateClick}>Update</button>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
      {showUpdateForm && (
        <HomesUpdateForm home={home} onUpdateHome={onUpdateHome} />
      )}
    </div>
  );
}

export default HomesItem;

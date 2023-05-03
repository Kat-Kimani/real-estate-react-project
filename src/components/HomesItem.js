import React, { useState, useEffect } from "react";

function HomeItem() {
  return (
    <div>
      <h2>{home.title}</h2>
      <p>Bedrooms: {home.bedrooms}</p>
      <p>Bathrooms: {home.bathrooms}</p>
      <p>Living Room: {home.livingroom ? "Yes" : "No"}</p>
      <div>
        {home.images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default HomeItem;

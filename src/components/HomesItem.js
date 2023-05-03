import React from "react";

function HomesItem({ home }) {
  console.log(home);
  return (
    <div classname="homes-container">
      <h2>{home.title}</h2>
      <p>Bedrooms: {home.bedrooms}</p>
      <p>Bathrooms: {home.bathrooms}</p>
      <p>Living Room: {home.livingroom ? "Yes" : "No"}</p>
      {/* <div>
        {home.images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div> */}
      {home.images
        ? home.images.map((image, index) => (
            <img key={index} src={image} alt={` ${index + 1}`} />
          ))
        : null}
    </div>
  );
}

export default HomesItem;

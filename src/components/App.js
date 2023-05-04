import React, { useState, useEffect } from "react";
import HomesForm from "./HomesForm";

const HomesList = () => {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/homes")
      .then((response) => response.json())
      .then((data) => setHomes(data));
  }, []);

  return (
  

    <div>
      {homes.map((home) => (
        <div key={home.id}>
          <h2>{home.title}</h2>
          <p>Location: {home.location}</p>
          <p>Category: {home.category}</p>
          <p>Bedrooms: {home.bedrooms}</p>
          <p>Bathrooms: {home.bathrooms}</p>
          <p>Living Room: {home.livingroom ? "Yes" : "No"}</p>
          <div>
            {home.images.map((image) => (
              <img key={image} src={image} alt="home" width="200" height="150" />
            ))}
            
          </div>
        </div>
      ))}
<HomesForm/>

    </div>
  );
};

export default HomesList;

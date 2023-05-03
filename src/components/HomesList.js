import React from "react";

function HomesList() {
  const [homes, setHomes] = UseState([]);

  //Add useEffect hook
  useEffect(() => {
    fetch("http://localhost:4300/homes")
      .then((resp) => resp.json())
      .then((homes) => setHomes(homes));
  }, []);

  return (
    <div>
      <div>
        {homes.map((home) => (
          <HomeItem key={home.id} home={home} />
        ))}
      </div>
    </div>
  );
}

export default HomesList;

{
  /* {homes.map((home) => (
        <div key={home.id}>
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
      ))} */
}

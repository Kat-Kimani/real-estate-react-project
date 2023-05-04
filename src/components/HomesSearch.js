import React, { useState } from "react";

function HomeSearch({ properties, onSearch }) {
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");

  const handleSearch = () => {
    const searchParams = {
      location,
      title,
      bedroom,
      bathroom
    };
    onSearch(searchParams);
  };

  return (
    <div>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Bedroom:
        <input type="number" value={bedroom} onChange={(e) => setBedroom(e.target.value)} />
      </label>
      <label>
        Bathroom:
        <input type="number" value={bathroom} onChange={(e) => setBathroom(e.target.value)} />
      </label>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default HomeSearch;


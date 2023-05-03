import React, { useState, useEffect } from "react";

import HomesList from "./HomesList.js";
import "./style.css";
import NavBar from "./NavBar.js";

function App() {
  const [homes, setHomes] = useState([]);
  const [category, setCategory] = useState("all");
  //const [filteredHomes, setFilteredHomes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4300/homes")
      .then((resp) => resp.json())
      .then((homes) => {
        setHomes(homes);
      });
  }, []);

  const onCategoryClick = (category) => {
    setCategory(category);
  };

  function handleSearch(filteredHomes) {
    setHomes(filteredHomes);
  }

  const filteredHomes =
    category === "all"
      ? homes
      : homes.filter((home) => home.category === category);

  return (
    <div>
      <NavBar
        onCategoryClick={onCategoryClick}
        homes={homes}
        onSearch={handleSearch}
      />
      <HomesList homes={filteredHomes} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
//import { Route, Routes } from "react-router-dom";
import HomesList from "./HomesList.js";
import "./style.css";
import NavBar from "./NavBar.js";
import Header from "./Header.js";
import HomesForm from "./HomesForm.js";

function App() {
  const [homes, setHomes] = useState([]);
  const [category, setCategory] = useState("all");

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

  const handleAddHome = (newHome) => {
    setHomes([...homes, newHome]);
  };

  return (
    <div>
      <Header />
      <NavBar
        onCategoryClick={onCategoryClick}
        homes={homes}
        onSearch={handleSearch}
      />
      <HomesList homes={filteredHomes} />
      <HomesForm onAddHome={handleAddHome} />
    </div>
  );
}

export default App;

//  <Routes>
//         <React.Fragment>
//           <Route path="/form">
//             <HomesForm onAddHome={handleAddHome} />
//           </Route>
//           <Route path="/">
//             <HomesList
//               homes={filteredHomes.length > 0 ? filteredHomes : homes}
//             />
//           </Route>
//         </React.Fragment>
//       </Routes>

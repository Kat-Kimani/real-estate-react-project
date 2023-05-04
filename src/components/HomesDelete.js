import React, { useState } from "react";

function HomesDelete({ homes, setHomes }) {
  const [homeId, setHomeId] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedHomes = homes.filter((home) => home.id !== parseInt(homeId));
    setHomes(updatedHomes);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="homeId">Enter the ID of the home to delete:</label>
        <input
          type="number"
          id="homeId"
          name="homeId"
          value={homeId}
          onChange={(event) => setHomeId(event.target.value)}
        />
        <button type="submit">Delete Home</button>
      </form>
    </div>
  );
}
export default HomesDelete;
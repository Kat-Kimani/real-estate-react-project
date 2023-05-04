import React from "react";

function HomesList() {
  const [homes, setHomes] = UseState([]);

  //Add useEffect hook
  useEffect(() => {
    fetch("http://localhost:3000/homes")
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


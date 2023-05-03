import React from "react";
import HomesItem from "./HomesItem";

function HomesList({ homes }) {
  // const [homes, setHomes] = useState([]);

  // //Add useEffect hook
  // useEffect(() => {
  //   fetch("http://localhost:4300/homes")
  //     .then((resp) => resp.json())
  //     .then((homes) => {
  //       setHomes(homes);
  //     });
  // }, []);
  // console.log(homes); // add this console log
  return (
    <div className="homes-container">
      {homes.map((home) => (
        <HomesItem key={home.id} home={home} />
      ))}
    </div>
  );
}

export default HomesList;

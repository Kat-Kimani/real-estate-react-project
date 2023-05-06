import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const websiteName = "Beautiful Homes";
  const slogan = "Find Your Gem Today";
  return (
    <header className="header">
      <div className="header-background"></div>
      <div className="logo">
        <FontAwesomeIcon icon={faHome} size="2x" />
        <h1>{websiteName}</h1>
      </div>
      <div id="slogan">
        <h3>{slogan}</h3>
      </div>
    </header>
  );
}

export default Header;

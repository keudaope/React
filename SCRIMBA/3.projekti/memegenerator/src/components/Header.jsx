import React from "react";
import Logo from "../images/Logo.png";
const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="" className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header-project">React-kurssi, osio 3</h4>
    </header>
  );
};

export default Header;

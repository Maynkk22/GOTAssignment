import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function Header() {
  return (
    <header className="center">
      <Link to={`/`}>
        <img src={logo} alt="GAME OF THRONES" />
      </Link>
    </header>
  );
}

export default Header;

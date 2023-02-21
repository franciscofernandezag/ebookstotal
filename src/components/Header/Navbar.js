import React from "react";
import logo from "../assets/logo2.png";
import NavCategories from "./NavCategories";
import CartWidget from "../Header/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header >
      <Link to={"/"}>
        <img  src={logo} alt="Logo" />
      </Link>
      <h1>Bienvenido </h1>
      <NavCategories />
      <Link>
        <CartWidget />
      </Link>
    </header>
  );
};

export default Navbar;

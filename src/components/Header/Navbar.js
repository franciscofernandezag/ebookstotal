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
      <div>
      <h1>EBOOKSTOTAL</h1>
      <h2>TIENDA VIRTUAL DE EBOOKS</h2>
      </div>
      <NavCategories />
      <Link>
        <CartWidget />
      </Link>
    </header>
  );
};

export default Navbar;

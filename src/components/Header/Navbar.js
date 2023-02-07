import React from "react";
import "../../Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <div>
          <h1> EBOOKSTOTAL </h1>
          <h2>Tiende Virtual de Ebooks</h2>
        </div>
        <li >Genero</li>
        <li >Autor</li>
        <li >Recomendados</li>
        <li >Mi Cuenta</li>
      </ul>
    </nav>
  );
};

export default Navbar;

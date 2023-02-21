import React from "react";
import { NavLink } from "react-router-dom";

const NavCategories = () => {
  const categories = [
    { id: 1, name: "Home", route:'/categories/Home' },
    { id: 2, name: "Genero", route:'/categories/Genero'},
    { id: 3, name: "Autor", route:'/categories/Autor'},
    { id: 4, name: "Recomendados", route:'/categories/Recomendados'},
    { id: 5, name: "MiCuenta", route:'/categories/Mi Cuenta'}
  ];

  return (
    <nav>
      {categories.map((category) => {
        return (
          <NavLink key={category.id} to={category.route}>
            {category.name}
          </NavLink>
        );
      })}
    </nav>
  );
};



export default NavCategories;
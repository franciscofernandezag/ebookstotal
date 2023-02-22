import React from "react";
import { NavLink } from "react-router-dom";

const NavCategories = () => {
  const categories = [
    { id: 1, name: "Clasico", route:'/categories/Clasico' },
    { id: 2, name: "Novela", route:'/categories/Novela'},
    { id: 3, name: "Divulgacion", route:'/categories/Divulgacion'},
    { id: 4, name: "Filosofia", route:'/categories/Filosofia'},
    { id: 5, name: "Autoayuda", route:'/categories/Autoayuda'}
    
  ];

  return (
<nav style={{display: 'flex', justifyContent: 'center'}}>
  {categories.map((category) => {
    return (
      <NavLink
        key={category.id}
        to={category.route}
        style={{
          marginRight: '10px',
          textDecoration: 'none',
          fontSize: '18px',
          width: '120px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
          fontFamily: 'sans-serif',
          fontStyle: 'normal',
          fontWeight: '700',
        }}
        activeStyle={{fontWeight: 'bold'}}
      >
        {category.name}
      </NavLink>
    );
  })}
</nav>
  );
};



export default NavCategories;
import React from "react";
import Carrito from "../assets/carrito1.png";
import "../../Navbar.css";

export const CartWidget = () => {
  return (
    <>

      <img className="icon" src={Carrito} alt="Carrito" />
   <p>0</p>
    </>
  );
};

export default CartWidget;

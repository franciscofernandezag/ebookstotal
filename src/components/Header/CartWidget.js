import React from "react";
import Carrito from "../assets/carrito1.png";
import "../../Navbar.css";

export const CartWidget = () => {
  return (
    <>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
        <img className="icon" src={Carrito} alt="Carrito" />
        <span style={{
          position: 'absolute',
          top: '15px',
          right: '20px',
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '50%',
          width: '20px',
          height: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold'
        }}>0</span>
      </div>
    </>
  );
};

export default CartWidget;

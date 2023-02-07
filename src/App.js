import React from "react";
import logo from "./components/assets/logo2.png";
import "./Navbar.css";
import "./Main.css";
import Navbar from "./components/Header/Navbar";
import ItemListContainer1 from "./Conteiner/ItemListConteiner";


function App() {

  const Seccion1Home = 'Libros Mas Vendidos';
  return (
    <>
    <header>
      <img src={logo} alt="logo" />
      <Navbar />
    </header>
    <main>
    <ItemListContainer1 Seccion1Home={Seccion1Home}/>
    </main>
    </>
  );
}

export default App;

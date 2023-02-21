import React from 'react'
import Navbar from "./components/Header/Navbar ";
import logo from "./components/assets/logo2.png";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";

function App() {

  const Seccion1Home = 'Libros Mas Vendidos';

  return (
   
    <BrowserRouter>
    <header>
      <img src={logo} alt="logo" />
      <Navbar />
    </header>
   <Routes>
   <Route path="/Home">
    Esta es la pag de Home 
   </Route>
   <Route path="/Genero">
    Esta es la pag de generos 
   </Route>
   <Route path="/Autor">
    Esta es la pag de generos 
   </Route>
   <Route path="/Recomendados">
    Esta es la pag de generos 
   </Route>
   <Route path="/MiCuenta">
    Esta es la pag de generos 
   </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
import React from 'react'
import Navbar from "./components/Header/Navbar";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";

function App() {

  const Seccion1Home = 'Libros Mas Vendidos';

  return (
   
    <BrowserRouter>
    <header>

      <Navbar />
    </header>
    </BrowserRouter>
  )
}

export default App
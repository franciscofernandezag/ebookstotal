import React from 'react';
import Navbar from './components/Header/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clasico from './components/Clasico';
import Novela from './components/Novela';
import Divulgacion from './components/Divulgacion';
import Filosofia from './components/Filosofia';
import AutoAyuda from './components/AutoAyuda';
import Home from './components/Home';

function App() {
  const routes = [
    { path: '/categories/Clasico', component: Clasico},
    { path: '/categories/Novela', component: Novela},
    { path: '/categories/Divulgacion', component: Divulgacion},
    { path: '/categories/Filosofia', component: Filosofia},
    { path: '/categories/AutoAyuda', component: AutoAyuda},
  ];

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

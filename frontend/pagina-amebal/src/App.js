import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EQUIPOS from "./lists/equipos.js";
import ARTICULOS from "./lists/articulos.js";
import NACIONALES from "./lists/nacionales.js";

import EquiposNav from "./components/otros/EquiposNav";
import BarraNav from "./components/otros/BarraNav";
import Footer from "./components/otros/Footer";
import Noticia from "./components/otros/Noticia";
import Inicio from "./components/paginas/Inicio";
import Descargas from "./components/paginas/Descargas";
import Institucional from "./components/paginas/Institucional";
import Nacionales from "./components/paginas/Nacionales";
import Fixture from "./components/paginas/Fixture";
import Clubes from "./components/paginas/Clubes";
import Club from "./components/paginas/Club";
import Posiciones from "./components/paginas/Posiciones";
import Contacto from "./components/paginas/Contacto";
import NuevoArticulo from "./components/paginas/NuevoArticulo";
import Login from "./components/paginas/Login";
import Nacional from "./components/otros/Nacional";
import Sistema from "./components/paginas/Sistema";

//https://youtu.be/0ChpbdflTMY

function App() {
  window.scrollTo(0, 10);
  return (
    <div className="App">
      <EquiposNav link="https://placedog.net/40/40" />
      <BarraNav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/posiciones" element={<Posiciones />} />
          <Route path="/fixture" element={<Fixture />} />
          <Route path="/nacionales" element={<Nacionales />} />
          <Route path="/clubes" element={<Clubes />} />
          {EQUIPOS &&
            EQUIPOS.map((item) => (
              <Route
                key={item.id}
                path={"clubes/" + item.nombre.replace(/ /g, "").toLowerCase()}
                element={<Club nombre={item.nombre} imagen={item.imagen} />}
              />
            ))}
          {ARTICULOS &&
            ARTICULOS.map((item) => (
              <Route
                key={item.id}
                path={"noticias/" + item.titulo.replace(/ /g, "").toLowerCase()}
                element={<Noticia titulo={item.titulo} img={item.img} />}
              />
            ))}
          {NACIONALES &&
            NACIONALES.map((item) => (
              <Route
                key={item.id}
                path={
                  "nacionales/" +
                  item.categoria.toLowerCase() +
                  item.año.toLowerCase() +
                  item.sede.toLowerCase()
                }
                element={<Nacional id={item.id} />}
              />
            ))}
          <Route path="/institucional" element={<Institucional />} />
          <Route path="/sistema" element={<Sistema />} />
          <Route path="/descargas" element={<Descargas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nuevo-articulo" element={<NuevoArticulo />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;

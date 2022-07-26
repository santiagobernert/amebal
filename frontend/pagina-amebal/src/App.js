import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EQUIPOS from "./lists/equipos.js";
import ARTICULOS from "./lists/articulos.js";
import NACIONALES from "./lists/nacionales.js";
import PARTIDOS from "./lists/partidos.js";

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
import PagPartido from "./components/paginas/PagPartido";
import Noticias from "./components/paginas/Noticias";
import Eventos from "./components/paginas/Eventos";

//https://youtu.be/0ChpbdflTMY

function App() {
  return (
    <div className="App">
      <EquiposNav />
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
                  item.sede.replace(/ /g, "").toLowerCase()
                }
                element={<Nacional id={item.id} />}
              />
            ))}
          {PARTIDOS &&
            PARTIDOS.map((item) => (
              <Route
                key={item.id}
                path={
                  "partidos/" +
                  item.torneo.replace(/ /g, "").toLowerCase() +
                  item.jornada.replace(/ /g, "").toLowerCase() +
                  item.categoria.replace(/ /g, "").toLowerCase() +
                  item.titulo.replace(/ /g, "").toLowerCase()
                }
                element={<PagPartido {...item} />}
              />
            ))}
          <Route path="/institucional" element={<Institucional />} />
          <Route path="/sistema" element={<Sistema />} />
          <Route path="/descargas" element={<Descargas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nuevo-articulo" element={<NuevoArticulo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/eventos" element={<Eventos />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;

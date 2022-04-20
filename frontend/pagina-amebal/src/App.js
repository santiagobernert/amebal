import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import IMGS_EQUIPOS from "../../imgs/index.js";

import EquiposNav from "./components/otros/EquiposNav";
import BarraNav from "./components/otros/BarraNav";
import Footer from "./components/otros/Footer";
import Inicio from "./components/paginas/Inicio";
import Descargas from "./components/paginas/Descargas";
import Institucional from "./components/paginas/Institucional";
import Nacionales from "./components/paginas/Nacionales";
import Fixture from "./components/paginas/Fixture";
import Clubes from "./components/paginas/Clubes";
import Posiciones from "./components/paginas/Posiciones";

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
          <Route path="/clubes" element={<Clubes />}>
            {IMGS_EQUIPOS &&
              IMGS_EQUIPOS.map((item) => (
                <Route
                  path={item.nombre}
                  element={<Club nombre={item.nombre} imagen={item.imagen} />}
                />
              ))}
          </Route>
          <Route path="/institucional" element={<Institucional />} />
          <Route path="/descargas" element={<Descargas />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;

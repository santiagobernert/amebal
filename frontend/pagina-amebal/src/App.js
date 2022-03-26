import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import EquiposNav from "./EquiposNav";
import BarraNav from "./BarraNav";
import Articulo from "./Articulo";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
        <EquiposNav link="https://placedog.net/40/40" />
        <BarraNav />
        <div className="sector-articulos row">
          <Articulo titulo="Se inicia el Apertura 2022" imagesrc="https://placedog.net/100/100" width="25rem"/>
          <Articulo titulo="CentroSur de damas Juniors" imagesrc="https://placedog.net/100/100" width="18rem"/>
          <Articulo titulo="Competencias de la CAH 2022" imagesrc="https://placedog.net/100/100" width="18rem" />
        </div>
        <Footer />
    </div>
  );
}

export default App;

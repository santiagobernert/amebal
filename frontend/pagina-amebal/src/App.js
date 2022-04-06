import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Router, Route, Link } from "react-router-dom";
import EquiposNav from "./components/EquiposNav";
import BarraNav from "./components/BarraNav";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Posiciones from "./components/Posiciones";

function App() {
  return (
    <div className="App">
      <EquiposNav link="https://placedog.net/40/40" />
      <BarraNav />
      <Router>
        <Route path="/" component={Inicio} />
        <Route path="/" component={Posiciones} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import EquiposNav from "./EquiposNav";
import BarraNav from "./BarraNav";

function App() {
  return (
    <div className="App">
        <EquiposNav />
        <BarraNav />
    </div>
  );
}

export default App;

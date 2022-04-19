import React from "react";
//import styles from "../styles/Posiciones.module.css";
import Titulo from "../otros/Titulo";
import { Form } from "react-bootstrap";

export default function Descargas() {
  return (
    <div>
      <Titulo text="DESCARGAS" />
      <div className="container">
        <h3>Archivos</h3>
        <div>
          <Form.Select aria-label="Default select example">
            <option selected value="liga">
              Todos
            </option>
            <option value="1">Jugadores</option>
            <option value="1">Árbitros</option>
            <option value="2">Entrenadores</option>
            <option value="3">Instituciones</option>
            <option value="3">Otros</option>
          </Form.Select>
        </div>
      </div>
    </div>
  );
}

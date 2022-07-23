import React from "react";
import styles from "../../styles/paginas/descargas/Descargas.module.css";
import Titulo from "../otros/Titulo";
import Buscar from "../otros/Buscar";
import Archivo from "../otros/Archivo";
import { Form, Col } from "react-bootstrap";

export default function Descargas() {
  return (
    <div>
      <div className={styles.blob}></div>
      <div className="position-relative">
        <Titulo text="Descargas" />
        <div className="position-absolute mt-4 top-0 end-0">
          <Buscar blanco={true}/>
        </div>
          
      </div>
      
      <div className="container">
        <Col sm={2}>
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
        </Col>
        <div className={styles.seccion_archivos}>
          <Archivo nombre="Planilla" />
          <Archivo nombre="Planilla" />
          <Archivo nombre="Planilla" />
          <Archivo nombre="Planilla" />
        </div>
      </div>
    </div>
  );
}

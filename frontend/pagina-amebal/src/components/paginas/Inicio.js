import React from "react";
import styles from "../../styles/Inicio.module.css";
import Articulo from "../otros/Articulo";

import { Col } from "react-bootstrap";


export default function Inicio() {
  window.scrollTo(0, 0);
  return (
    <div>
      <div className="container">
        <Col xs={5}>
          <form className="form-inline mb-3 d-inline-flex">
            <input
              className="form-control form-control-sm ml-3 w-75"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </Col>
      </div>
      <div className={styles.sector_articulos}>
        <div className="row">
          <div className="col">
            <Articulo
              titulo="Se inicia el Apertura 2022"
              imagesrc="https://placedog.net/200/100"
              principal={true}
            />
          </div>
          <div className="col">
            <Articulo
              titulo="CentroSur de damas Juniors"
              imagesrc="https://placedog.net/100/100"
            />
            <Articulo
              titulo="Competencias de la CAH 2022"
              imagesrc="https://placedog.net/100/100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

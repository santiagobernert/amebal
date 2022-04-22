import React from "react";
import styles from "../../styles/Articulo.module.css";
import Titulo from "../otros/Titulo";
import Articulo from "../otros/Articulo";
import { Row, Col } from "react-bootstrap";

export default function Institucional() {
  return (
    <div>
      <Titulo text="INSTITUCIONAL" />
      <div className={`container ${styles.sector_articulos}`}>
        <Row>
            <Articulo
              titulo="CentroSur de damas Juniors"
              imagesrc="https://placedog.net/100/100"
            />
            <Articulo
              titulo="Competencias de la CAH 2022"
              imagesrc="https://placedog.net/100/100"
            />
        </Row>
      </div>
    </div>
  );
}
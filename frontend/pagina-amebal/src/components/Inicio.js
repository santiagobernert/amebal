import React from "react";
import styles from "../styles/Inicio.module.css";
import Articulo from "./Articulo";

export default function Inicio() {
  return (
    <div>
      <div className={`${styles.sector_articulos} row`}>
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
  );
}

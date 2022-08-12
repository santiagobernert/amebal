import React from "react";
import { CardGroup } from "react-bootstrap";
import ClubCard from "../otros/ClubCard";
import styles from "../../styles/paginas/clubes/Clubes.module.css";
import Titulo from "../otros/Titulo";
import EQUIPOS from "../../lists/equipos.js";

export default function Clubes() {
  return (
    <div>
      <Titulo text="Clubes" />
      <div className={styles.blob}></div>
      <div className={styles.descripcion}>
        <h6>Son más de 15 los clubes que  pertenecen a nuestra institución, los cuales cuentan con equipos en varias categorías. Siempre estamos abiertos a nuevas inscripciones.</h6>
      </div>
      <CardGroup className={styles.div_clubes}>
        {EQUIPOS &&
          EQUIPOS.map((item) => (
            <ClubCard key={item.id} img={item.imagen} titulo={item.nombre} />
          ))}
      </CardGroup>
    </div>
  );
}

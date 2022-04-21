import React from "react";
import { CardGroup } from "react-bootstrap";
import ClubCard from "../otros/ClubCard";
//import styles from "../styles/Posiciones.module.css";
import Titulo from "../otros/Titulo";
import IMGS_EQUIPOS from "../../imgs/index.js";

export default function Clubes() {
  return (
    <div>
      <Titulo text="CLUBES" />
      <CardGroup>
        {IMGS_EQUIPOS &&
          IMGS_EQUIPOS.map((item) => (
            <ClubCard key={item.id} img={item.imagen} titulo={item.nombre} />
          ))}
      </CardGroup>
    </div>
  );
}

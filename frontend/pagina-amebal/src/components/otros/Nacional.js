import React from "react";
import styles from "../../styles/Nacionales.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";

import NACIONALES from "../../nacionales.js";
import Titulo from "./Titulo";
import Noticia from "./Noticia";
import Calendario from "./Calendario";
import Partido from "./Partido";

export default function Nacional({ id }) {
  const nacional = NACIONALES.find((x) => x.id === id);
  return (
    <div>
      <Titulo text={`${nacional.categoria} ${nacional.año} ${nacional.sede}`} />
      <Container>
        <Noticia
          principal={true}
          titulo={""}
          img={nacional.img}
          cuerpo={nacional.cuerpo}
        />
        <h3>Partidos</h3>
        <div className={styles.div_partidos}>
          <Partido />
          <Partido />
          <Partido />
          <Partido />
        </div>
      </Container>
    </div>
  );
}

import React from "react";
import styles from "../../styles/paginas/nacionales/Nacionales.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";

import NACIONALES from "../../lists/nacionales.js";
import EQUIPOS from "../../lists/equipos.js";
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
          <Partido
            equipo1={EQUIPOS.find(
              (x) => x.nombre === "Club Mendoza de Regatas"
            )}
            equipo2={EQUIPOS.find((x) => x.nombre === "Municipalidad de Maipu")}
          />
          <Partido
            equipo1={EQUIPOS.find(
              (x) => x.nombre === "Club Mendoza de Regatas"
            )}
            equipo2={EQUIPOS.find((x) => x.nombre === "Municipalidad de Maipu")}
          />
          <Partido
            equipo1={EQUIPOS.find(
              (x) => x.nombre === "Club Mendoza de Regatas"
            )}
            equipo2={EQUIPOS.find((x) => x.nombre === "Municipalidad de Maipu")}
          />
          <Partido
            equipo1={EQUIPOS.find(
              (x) => x.nombre === "Club Mendoza de Regatas"
            )}
            equipo2={EQUIPOS.find((x) => x.nombre === "Municipalidad de Maipu")}
          />
        </div>
      </Container>
    </div>
  );
}

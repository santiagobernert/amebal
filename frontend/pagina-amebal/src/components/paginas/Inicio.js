import React, { useState } from "react";
import styles from "../../styles/paginas/inicio/Inicio.module.css";
import Articulo from "../otros/Articulo";
import Partido from "../otros/Partido";

import ARTICULOS from "../../lists/articulos.js";
import PARTIDOS from "../../lists/partidos.js";

import { Row, Col, Button } from "react-bootstrap";
import Noticia from "../otros/Noticia";

export default function Inicio() {
  const [search1Open, setOpen1] = useState(false);
  const opens1 = () => {
    setOpen1(!search1Open);
  };
  const [search2Open, setOpen2] = useState(false);
  const opens2 = () => {
    setOpen2(!search2Open);
  };
  return (
    <div>
      <div className={styles.blob}></div>
      <div className="container">
        <div className={styles.headers}>
          <h1>Asociación Mendocina de Balonmano</h1>
          <h5>Fundada en 1974</h5>
        </div>
      </div>
      <div className={styles.cont}>
        <div className="container">
          <div className={styles.news}>
            <h4>Noticias</h4>
            <div
              className={`${styles.search} ${search1Open ? styles.open : ""}`}
            >
              <form className="form-inline mb-3 d-inline-flex">
                <input
                  className={`form-control form-control-sm ml-3 w-75 ${
                    search1Open ? styles.open : ""
                  }`}
                  type="text"
                  placeholder="Buscar"
                  aria-label="Search"
                />
              </form>
              <button type="" onClick={opens1}></button>
            </div>
          </div>
          <div className={styles.sector_articulos}>
            <Row className={styles.principal}>
              <Col>
                <Row>
                  <a target="blank" href="/nuevo-articulo">
                    <Button>Nuevo Articulo</Button>
                  </a>
                </Row>
                <Row>
                  <Noticia
                    principal={true}
                    titulo="Inicios"
                    img="https://placedog.net/200/100"
                    cuerpo="En el marco de un generoso trabajo federal de formación y detección de talentos que lleva a cabo la Selección Juvenil a cargo de Rubén Busolín, del miércoles al sábado pasado concentraron en el CeNARD 29 jugadores de ocho afiliadas y siete provincias argentinas: Mendoza, Córdoba, San Luis, Chaco, Río Negro, Neuquén y Buenos Aires a través de Mar del Plata (Atlántica) y Los Toldos (AsAmBal). La nómina total de trabajo de este año incluye a 165 jugadores."
                  />
                </Row>
              </Col>
            </Row>
            <Row className={styles.articulos}>
              {ARTICULOS &&
                ARTICULOS.map((item) => (
                  <Articulo key={item.id} titulo={item.titulo} img={item.img} />
                ))}
            </Row>
          </div>
          <div className={styles.matches}>
            <h4>Partidos</h4>
            <div
              className={`${styles.search} ${search2Open ? styles.open : ""}`}
            >
              <form className="form-inline mb-3 d-inline-flex">
                <input
                  className={`form-control form-control-sm ml-3 w-75 ${
                    search2Open ? styles.open : ""
                  }`}
                  type="text"
                  placeholder="Buscar"
                  aria-label="Search"
                />
              </form>
              <button type="" onClick={opens2}></button>
            </div>
          </div>
          <div className={styles.sector_partidos}>
            <Row className={styles.partidos}>
              {PARTIDOS &&
                PARTIDOS.map((item) => (
                  <Partido
                    key={item.id}
                    {...item}
                  />
                ))}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

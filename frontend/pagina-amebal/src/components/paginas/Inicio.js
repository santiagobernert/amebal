import React, { useState, useEffect } from "react";
import styles from "../../styles/paginas/inicio/Inicio.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css"
import Articulo from "../otros/Articulo";
import Partido from "../otros/Partido";
import Buscar from "../otros/Buscar";
import Noticia from "../otros/Noticia";

import ARTICULOS from "../../lists/articulos.js";
import EQUIPOS from "../../lists/equipos.js";

import { Row, Col, Button } from "react-bootstrap";

export default function Inicio() {
  const [partidos, setPartidos] = useState([]); 
  const [clubes, setClubes] = useState([]);

  const getClubes = () => {
    fetch("http://localhost:8000/club")
      .then((res) => res.json())
      .then((responseJson) => {
        setClubes(responseJson.clubes);
        return responseJson;
      });
  };

  const getPartidos = () => {
    fetch("http://localhost:5000/partidos")
      .then((res) => res.json())
      .then((responseJson) => {
        setPartidos(responseJson.partidos);
        return responseJson;
      });
  };

  useEffect(() => {
    getPartidos();
    getClubes()
  }, []);
  return (
    <div>
      <div className={styles.blob}></div>
      <div className="container">
        <div className={styles.headers}>
          <h1>Asociación Mendocina de Balonmano</h1>
          <h5>Fundada en 1974</h5>
        </div>
        <div className={styles.equipos}>
          {clubes &&
              clubes.map((club) => (
                <img
                  key={club.id}
                  src={club.escudo}
                  alt={club.nombre}
                />
              ))}
        </div>
      </div>
      <div className={styles.cont}>
        <div className="container">
          <div className={styles.news}>
            <h4>Noticias</h4>
            <Buscar />
          </div>
          <div className={styles.sector_articulos}>
            <Row className={styles.principal}>
              <Col>
                <Row>
                  <a target="blank" href="/nuevo-articulo">
                    <Button>Nuevo Articulo</Button>
                  </a>
                </Row>
              </Col>
            </Row>
            <Row className={styles.articulos}>
              {ARTICULOS &&
                ARTICULOS.map((item) => (
                  <Articulo key={item.id} titulo={item.titulo} img={item.img} />
                ))}
            </Row>
              <a href="noticias"><h4 className="link text-center">Ver más</h4></a>
          </div>
          <div className={styles.matches}>
            <h4>Partidos</h4>
            <Buscar />
          </div>
          <div className={styles.sector_partidos}>
            <Row className={styles.partidos}>
              {partidos &&
                partidos.map((item) => <Partido key={item.id} {...item} />)}
            </Row>
            <a href="fixture"><h4 className="link text-center">Ver más</h4></a>
          </div>
        </div>
      </div>
    </div>
  );
}

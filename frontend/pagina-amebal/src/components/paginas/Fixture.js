import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import { Col, Form, Row, InputGroup } from "react-bootstrap";

import EQUIPOS from "../../lists/equipos.js";
import PARTIDOS from "../../lists/partidos.js";
import ARTICULOS from "../../lists/articulos.js";

import Calendario from "../otros/Calendario";
import Partido from "../otros/Partido";
import Articulo from "../otros/Articulo";
import Titulo from "../otros/Titulo";
import styles from "../../styles/paginas/fixture/Fixture.module.css";

export default function Fixture() {
  return (
    <div>
      <Titulo text="Fixture" />
      <div className={styles.blob}></div>
      <div className={styles.main}>
          <Row className={styles.selects_row}>
            <Form.Select className={styles.select} readOnly aria-label="Default select example">
              <option value="todos">Fecha</option>
              <option value="1">Fecha 1</option>
              <option value="1">Fecha 2</option>
              <option value="2">Fecha 3</option>
              <option value="3">Fecha 4</option>
              <option value="3">Fecha 5</option>
            </Form.Select>
            <Form.Select className={styles.select} readOnly aria-label="Default select example">
              <option value="año">Año</option>
              <option value="liga">2022</option>
              <option value="1">2021</option>
            </Form.Select>
            <Form.Select className={`${styles.select} ${styles.club_select}`} readOnly aria-label="Default select example">
              <option value="todos">Club</option>
              {EQUIPOS &&
                EQUIPOS.map((item) => (
                  <option key={item.id} value={item.nombre}>
                    {item.nombre}
                  </option>
                ))}
            </Form.Select>
            <Form.Select className={styles.select} readOnly aria-label="Default select example">
              <option value="todos">Categoría</option>
              <option value="liga">Liga</option>
              <option value="1">Mayores</option>
              <option value="1">Junior</option>
              <option value="2">Juvenil</option>
              <option value="3">Cadetes</option>
              <option value="3">Menores</option>
              <option value="3">Infantiles</option>
            </Form.Select>
            <Form.Select className={styles.select} readOnly aria-label="Default select example">
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </Form.Select>
          </Row>
        <div className={styles.div_partidos}>

          <div className={styles.cont_partidos}>
            {PARTIDOS &&
              PARTIDOS.map((item) => <Partido className={styles.partido} key={item.id} {...item} />)}
            <a href="/posiciones"><h5>Ver posiciones</h5></a>
          </div>
        </div>
        <div className={styles.div_calendario}>
          <Calendario />
          {ARTICULOS &&
                ARTICULOS.map((item) => (
                  <Articulo key={item.id} titulo={item.titulo} img={item.img} />
                ))}
        </div>
      </div>
    </div>
  );
}

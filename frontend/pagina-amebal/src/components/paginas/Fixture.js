import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import { Col, Form, Row, InputGroup } from "react-bootstrap";

import EQUIPOS from "../../equipos.js";

import Calendario from "../otros/Calendario";
import Partido from "../otros/Partido";
import Titulo from "../otros/Titulo";
import styles from "../../styles/Fixture.module.css";

export default function Fixture() {
  return (
    <div>
      <Titulo text="FIXTURE" />
      <div className={styles.main}>
        <div className={styles.div_calendario}>
          <Calendario />
        </div>
        <div className={styles.div_partidos}>
          <Row>
            <Col>
            <Form.Label>Año</Form.Label>
            <Form.Select aria-label="Default select example">
            <option selected value="liga">
              2022
            </option>
            <option value="1">2021</option>
          </Form.Select>
          </Col>
            <Col>
            <Form.Label>Fecha</Form.Label>
            <Form.Select aria-label="Default select example">
            <option selected value="liga">
              Todos
            </option>
            <option value="1">Fecha 1</option>
            <option value="1">Fecha 2</option>
            <option value="2">Fecha 3</option>
            <option value="3">Fecha 4</option>
            <option value="3">Fecha 5</option>
          </Form.Select>
          </Col>
            <Col>
            <Form.Label>Club</Form.Label>
            <Form.Select aria-label="Default select example">
            <option selected value="liga">
              Todos
            </option>
            {EQUIPOS &&
            EQUIPOS.map((item) => (
              <option
                key={item.id}
                value={item.nombre}
              >{item.nombre}</option>
            ))}
          </Form.Select>
            </Col>
            <Col>
            <Form.Label>Categoría</Form.Label>
            <Form.Select aria-label="Default select example">
            <option selected value="liga">
              Todos
            </option>
            <option value="liga">Liga</option>
              <option value="1">Mayores</option>
              <option value="1">Junior</option>
              <option value="2">Juvenil</option>
              <option value="3">Cadetes</option>
              <option value="3">Menores</option>
              <option value="3">Infantiles</option>
          </Form.Select>
            </Col>
            <Col>
            <Form.Label style={{ color: "transparent" }}>cat</Form.Label>
            <Form.Select aria-label="Default select example">
              <option selected value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </Form.Select>
            </Col>
          </Row>
          
        
          <h4>Partidos</h4>
          <div className={styles.cont_partidos}>
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
        </div>
      </div>
    </div>
  );
}

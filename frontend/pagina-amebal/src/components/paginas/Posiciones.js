import React from "react";
import styles from "../../styles/paginas/posiciones/Posiciones.module.css";
import { Form, Table } from "react-bootstrap";
import Titulo from "../otros/Titulo";
import "../../App.css"

export default function Posiciones() {
  return (
    <div>
      <Titulo text="Posiciones" />
      <div className={styles.blob}></div>
      <div className="container">
          <div className={styles.selects_row}>
            <Form.Select aria-label="Default select example">
              <option value="liga">Liga</option>
              <option value="1">Mayores</option>
              <option value="1">Junior</option>
              <option value="2">Juvenil</option>
              <option value="3">Cadetes</option>
              <option value="3">Menores</option>
              <option value="3">Infantiles</option>
            </Form.Select>
            <Form.Select aria-label="Default select example">
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </Form.Select>
            <Form.Select readOnly aria-label="Default select example">
              <option value="año">Año</option>
              <option value="liga">2022</option>
              <option value="1">2021</option>
            </Form.Select>
          </div>
          <Table className={styles.tabla} striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th style={{width: '6.2rem'}}>Club</th>
                  <th>PJ</th>
                  <th>G</th>
                  <th>P</th>
                  <th>GF</th>
                  <th>GC</th>
                  <th>DG</th>
                  <th>PTS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>[]</td>
                  <td>CMR</td>
                  <td>9</td>
                  <td>9</td>
                  <td>0</td>
                  <td>100</td>
                  <td>10</td>
                  <td>90</td>
                  <td>27</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>[]</td>
                  <td>CMR</td>
                  <td>9</td>
                  <td>9</td>
                  <td>0</td>
                  <td>100</td>
                  <td>10</td>
                  <td>90</td>
                  <td>27</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>[]</td>
                  <td>CMR</td>
                  <td>9</td>
                  <td>9</td>
                  <td>0</td>
                  <td>100</td>
                  <td>10</td>
                  <td>90</td>
                  <td>27</td>
                </tr>
              </tbody>
            </Table>
          <h5>Goleadores</h5>
          <Table className={styles.tabla}>
          <thead>
                <tr>
                  <th className={styles.goles}>#</th>
                  <th className={styles.goles}>Equipo</th>
                  <th style={{color: 'transparent'}} className={styles.goles}>___</th>
                  <th className={styles.goles}>Nombre</th>
                  <th className={styles.goles}>Goles</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{width: '100%'}}>
                  <td className={styles.goles}>1</td>
                  <td className={styles.goles}>[]</td>
                  <td className={styles.goles}>CMR</td>
                  <td className={styles.goles}>Gringo Gringo</td>
                  <td className={styles.goles}>9</td>
                </tr>
              </tbody>
          </Table>
      </div>
    </div>
  );
}

import React from "react";
import { Card, Table } from "react-bootstrap";

import styles from "../../styles/paginas/club/Club.module.css";

import EQUIPOS from "../../lists/equipos.js";
import PARTIDOS from "../../lists/partidos.js";
import Titulo from "../otros/Titulo.js";
import Partido from "../otros/Partido.js";
import instagram from "../../imgs/instagram-logo.png";
import facebook from "../../imgs/facebook-logo.png";
import twitter from "../../imgs/twitter-logo.png";

export default function Club({ nombre, imagen }) {
  return (
    <div>
      <Titulo text={nombre} />
      <div className={styles.blob}></div>
      <div className="container">
        <div className="row">
          <div className="col text-center">
              <img src={imagen} alt={nombre} style={{ width: "calc(20vw + 20vh)" }} />
          </div>
          <div className="col">
            <div className="row p-2">
              <div className="col pt-1">
                <h5>Ubicación</h5>  
                <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53602.89746442965!2d-68.93297196875!3d-32.89337999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09aef0d9b057%3A0xab741a983b2e45f1!2sClub%20Mendoza%20de%20Regatas!5e0!3m2!1ses-419!2sar!4v1658177176039!5m2!1ses-419!2sar"
                 style={{border:"0", width:"70vw", height:"32vh"}} 
                 allowfullscreen="" 
                 loading="lazy" 
                 referrerpolicy="no-referrer-when-downgrade"></iframe>
                 <a href="/">Visitar sitio oficial</a>
              </div>
              <div className="col d-flex flex-column vw-10 pt-2 justify-content-center">
                <a href="/"><img className={styles.logo} src={facebook} alt="" /></a>
                <a href="/"><img className={styles.logo} src={twitter} alt="" /></a>
                <a href="/"><img className={styles.logo} src={instagram} alt="" /></a>
              </div>
            </div>
          </div>
          <div className="col container">
            <h3>Tabla de posiciones</h3>
            <Table className={`${styles.tabla} mb-4 mt-3`} striped bordered hover>
              <thead>
                <tr>
                  <th>Cat.</th>
                  <th>Pos</th>
                  <th>J</th>
                  <th>G</th>
                  <th>P</th>
                  <th>DG</th>
                  <th>PTS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Liga Masc</td>
                  <td>1</td>
                  <td>9</td>
                  <td>9</td>
                  <td>0</td>
                  <td>100</td>
                  <td>27</td>
                </tr>
                <tr>
                  <td>Juvenil Masc</td>
                  <td>1</td>
                  <td>9</td>
                  <td>9</td>
                  <td>0</td>
                  <td>100</td>
                  <td>27</td>
                </tr>
                <tr>
                  <td>Cadetes Masc</td>
                  <td>6</td>
                  <td>9</td>
                  <td>9</td>
                  <td>0</td>
                  <td>100</td>
                  <td>27</td>
                </tr>
              </tbody>
            </Table>

            <h3>Partidos</h3>
            <div className={styles.cont_partidos}>
              {PARTIDOS &&
                PARTIDOS.map((item) => <Partido className={styles.partido} key={item.id} {...item} />)}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

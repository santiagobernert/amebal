import React, { useEffect, useState } from "react";
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
  const [partidos, setPartidos] = useState([]); 
  
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
  }, []);
  return (
    <div>
      <div className={styles.mobile}>
        <Titulo text={nombre} />
      </div>
      <div className={styles.blob}></div>
      <div className="container pt-2">
        <div className="pt-4 d-flex flex-wrap justify-content-between">
          <div>
            <div className="text-center vertical">
              <img
                src={imagen}
                alt={nombre}
                style={{ width: "calc(15vw + 3rem)", margin: "0 9rem 0 3rem" }}
              />
            </div>
            <div className={styles.desktop}>
              <h2 className="fw-bold text-center">{nombre}</h2>
            </div>
          </div>

          <div
            className="d-flex flex-wrap p-2"
            style={{
              padding: "2rem",
              justifySelf: "end",
            }}
          >
            <div
              className={`d-flex flex-wrap pt-1 justify-content-center ${styles.ubicacion}`}
              style={{ width: "min-content" }}
            >
              <h5 className="text-light">Ubicación</h5>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53602.89746442965!2d-68.93297196875!3d-32.89337999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09aef0d9b057%3A0xab741a983b2e45f1!2sClub%20Mendoza%20de%20Regatas!5e0!3m2!1ses-419!2sar!4v1658177176039!5m2!1ses-419!2sar"
                style={{
                  border: "0",
                  width: "20rem",
                  maxWidth: "90vw",
                  height: "18rem",
                  alignSelf: "center",
                  borderRadius: "0.2rem",
                }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <br />
              <a href="/">Visitar sitio oficial</a>
            </div>
            <div
              className={`d-flex w-100 pt-2 justify-content-evenly ${styles.redes}`}
            >
              <a href="/">
                <img className={styles.logo} src={facebook} alt="" />
              </a>
              <a href="/">
                <img className={styles.logo} src={twitter} alt="" />
              </a>
              <a href="/">
                <img className={styles.logo} src={instagram} alt="" />
              </a>
            </div>
          </div>

          <div style={{ width: "min-content", padding: "2rem" }}>
            <div>
              <div className="container">
                <h3>Tabla de posiciones</h3>
                <Table className={`${styles.tabla} mb-4 mt-3`} striped hover>
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
              </div>
            </div>
          </div>
          <div style={{ padding: "2rem", width: "100%", maxWidth: "40rem" }}>
            <div>
              <h3>Partidos</h3>
              <div className={styles.cont_partidos}>
                {partidos &&
                  partidos.map((partido) => {
                    if (partido.equipoA == nombre || partido.equipoB == nombre){
                      return(
                    <Partido
                      className={styles.partido}
                      key={partido.id}
                      {...partido}
                    />
                  )
                    }
                    
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

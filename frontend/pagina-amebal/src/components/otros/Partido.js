import React from "react";

import styles from "../../styles/otros/partido/Partido.module.css";

export default function ({ equipo1, equipo2 }) {
  return (
    <div className={styles.partido}>
      <div className={styles.titulo}>
        <h4>{`${equipo1.nombre} vs ${equipo2.nombre}`}</h4>
      </div>
        <div className={styles.detalles}>
          <h6>Fecha 1</h6>
          <h6>18 de Marzo 2022</h6>
          <h6>Polideportivo JD Ribosqui</h6>
        </div>
      <div className={styles.info}>
        <div className={styles.equipo}>
          <h4>{equipo1.abv}</h4>
          <img src={equipo1.imagen} alt={equipo1.abv} />
        </div>
        <div className={styles.resultado}>
          <h4>38 - 37</h4>
        </div>
        <div className={styles.equipo}>
          <h4>{equipo2.abv}</h4>
          <img src={equipo2.imagen} alt={equipo2.abv} />
        </div>
      </div>
    </div>
  );
}

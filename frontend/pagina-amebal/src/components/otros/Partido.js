import React from "react";

import styles from "../../styles/otros/partido/Partido.module.css";

export default function ({ titulo,
  equipo1,
  equipo2,
  categoria,
  sede,
  fecha,
  torneo,
  jornada,
  resultado }) {
  return (
    <div className={styles.partido}>
      <div className={styles.fecha}>
        <a href={`partidos/${torneo.replace(/ /g, "").toLowerCase()}${jornada.replace(/ /g, "").toLowerCase()}`}><h4>{jornada}</h4></a>
      </div>
      <div  className={styles.info}>
        <a href={`clubes/${equipo1}`}><img src={equipo1.imagen} alt={equipo1.abv} /></a>
          <div className={styles.detalles}>
            <h6 className={styles.torneo}>{torneo}</h6>
            <h6 className={styles.categoria}>{categoria}</h6>
            <h4 className={styles.resultado}>{resultado}</h4>
          </div>  
        <a href={`clubes/${equipo2}`}><img src={equipo2.imagen} alt={equipo2.abv} /></a>
      </div>
      <div className={styles.titulo}>
        <a href={`partidos/${torneo.replace(/ /g, "").toLowerCase()}${jornada.replace(/ /g, "").toLowerCase()}${categoria.replace(/ /g, "").toLowerCase()}${titulo.replace(/ /g, "").toLowerCase()}`}>
          <h3>{`${equipo1.abv} vs ${equipo2.abv}`}</h3>
        </a>
      </div> 
    </div>
  );
}

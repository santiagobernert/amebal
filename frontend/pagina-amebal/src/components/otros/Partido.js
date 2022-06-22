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
  resultado, }) {
  return (
    <div className={styles.partido}>
      <div className={styles.fecha}>
        <h4>{jornada}</h4>
      </div>
      <div  className={styles.info}>
        <img src={equipo1.imagen} alt={equipo1.abv} />
          <div className={styles.detalles}>
            <h6 className={styles.torneo}>{torneo}</h6>
            <h6 className={styles.categoria}>{categoria}</h6>
            <h4 className={styles.resultado}>{resultado.total_str}</h4>
          </div>  
        <img src={equipo2.imagen} alt={equipo2.abv} />
      </div>
      <div className={styles.titulo}>
        <h3>{`${equipo1.abv} vs ${equipo2.abv}`}</h3>
      </div> 
    </div>
  );
}

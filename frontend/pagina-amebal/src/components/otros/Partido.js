import React, { useState, useEffect } from "react";

import styles from "../../styles/otros/partido/Partido.module.css";

export default function ({ titulo,
  equipoA,
  equipoB,
  categoria,
  sede,
  fecha,
  torneo,
  jornada,
  resultado }) {
    const [imagenA, setimagenA] = useState('');
    const [imagenB, setimagenB] = useState('[]');
    useEffect(() => {
      setimagenA(
        require("../../imgs/equipos/regatas.png")//require(fetch(`http://localhost:8000/imagenes/${equipoA.toLowerCase()}`).then(res => res.json()).then(r => r.img.imagen)
      );
      console.log('b');
      setimagenB(
        require(fetch(`http://localhost:8000/imagenes/${equipoB.toLowerCase()}`).then(res => res.json()).then(r => console.log(r))
      ));
    }, []);
  return (
    <div className={styles.partido}>
      <div className={styles.fecha}>
        <a href={`partidos/${torneo.replace(/ /g, "").toLowerCase()}${jornada.replace(/ /g, "").toLowerCase()}`}><h4>{jornada}</h4></a>
      </div>
      <div  className={styles.info}>
        <a href={`clubes/${equipoA}`}><img src={imagenA} alt={equipoA} /></a>
          <div className={styles.detalles}>
            <h6 className={styles.torneo}>{torneo}</h6>
            <h6 className={styles.categoria}>{categoria}</h6>
            <h4 className={styles.resultado}>{resultado}</h4>
          </div>  
        <a href={`clubes/${equipoB}`}><img src={imagenB} alt={equipoB} /></a>
      </div>
      <div className={styles.titulo}>
        <a href={`partidos/${torneo.replace(/ /g, "").toLowerCase()}${jornada.replace(/ /g, "").toLowerCase()}${categoria.replace(/ /g, "").toLowerCase()}${titulo.replace(/ /g, "").toLowerCase()}`}>
          <h3>{`${equipoA} vs ${equipoB}`}</h3>
        </a>
      </div> 
    </div>
  );
}

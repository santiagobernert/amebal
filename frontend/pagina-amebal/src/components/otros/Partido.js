import React, { useState, useEffect } from "react";

import styles from "../../styles/otros/partido/Partido.module.css";
import logo from  "../../imgs/logo-amebal-cd.png"

export default function ({ titulo,
  equipoA,
  equipoB,
  categoria,
  sede,
  fecha,
  torneo,
  jornada,
  resultado }) {
    const [updater, update] = useState(true)
    const [imagenA, setimagenA] = useState(logo);
    const [imagenB, setimagenB] = useState(logo);
    useEffect(() => {
      fetch(`http://localhost:8000/imagenes/${equipoA.toLowerCase()}`).then(res => res.json()).then(r => setimagenA(""+r.img.imagen)).then(()=>{update(!updater)});
      fetch(`http://localhost:8000/imagenes/${equipoB.toLowerCase()}`).then(res => res.json()).then(r => setimagenB(""+r.img.imagen)).then(()=>{update(!updater)});
    }, []);
  return (
    <div className={styles.partido}>
      <div className={styles.fecha}>
        <a href={`partidos/${torneo.replace(/ /g, "").toLowerCase()}${jornada.replace(/ /g, "").toLowerCase()}`}><h4>{jornada}</h4></a>
      </div>
      <div  className={styles.info}>
        <a href={`clubes/${equipoA.toLowerCase()}`}><img src={imagenA} alt={equipoA} /></a>
          <div className={styles.detalles}>
            <h6 className={styles.torneo}>{torneo}</h6>
            <h6 className={styles.categoria}>{categoria}</h6>
            <h4 className={styles.resultado}>{resultado}</h4>
          </div>  
        <a href={`clubes/${equipoB.toLowerCase()}`}><img src={imagenB} alt={equipoB} /></a>
      </div>
      <div className={styles.titulo}>
        <a href={`partidos/${torneo.replace(/ /g, "").toLowerCase()}${jornada.replace(/ /g, "").toLowerCase()}${categoria.replace(/ /g, "").toLowerCase()}${titulo.replace(/ /g, "").toLowerCase()}`}>
          <h3>{`${equipoA} vs ${equipoB}`}</h3>
        </a>
      </div> 
    </div>
  );
}

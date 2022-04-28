import React from "react";

import styles from "../../styles/Partido.module.css";

export default function ({ equipo1, equipo2 }) {
  return (
    <div>
      <h4>{equipo1.nombre}</h4>
      <img src={equipo1.img} alt={equipo1.nombre} />
      <h4>{equipo2.nombre}</h4>
      <img src={equipo2.img} alt={equipo2.nombre} />
    </div>
  );
}

import React from "react";

import styles from "../../styles/Archivo.module.css";

export default function Archivo({ nombre }) {
  return (
    <div className={styles.archivo}>
      <div className="d-inline-flex align-items-center">
        <img src="https://placedog.net/100/100" alt="filetype" />
        <h4>{nombre}</h4>
      </div>
      <button className={styles.descargar}>Y</button>
    </div>
  );
}

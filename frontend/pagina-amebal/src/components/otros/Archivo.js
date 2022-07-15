import React from "react";

import styles from "../../styles/otros/archivo/Archivo.module.css";

export default function Archivo({ archivo, filetype, size }) {
  if (!archivo){
    archivo = "File";
    filetype = "PDF";
    size = "216KB";
  }
  return (
    <div className={styles.archivo}>
      <div className="align-items-center text-center">
        <h5>{archivo}</h5>
        <img src="https://placedog.net/80/60" alt={filetype} />
        <h6 className="text-muted">{size}</h6>
      </div>
      <button className={styles.descargar}>Descargar</button>
    </div>
  );
}

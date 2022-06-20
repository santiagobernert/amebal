import React from "react";
import styles from "../../styles/otros/titulo/Titulo.module.css";

export default function Titulo({ text }) {
  return (
    <div className={styles.cont_titulo}>
      <h1 className={styles.titulo}>{text}</h1>
    </div>
  );
}

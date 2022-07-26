import React from "react";
import styles from "../../styles/otros/titulo/Titulo.module.css";

export default function Titulo({ text, blanco }) {
  return (
    <div className={styles.cont_titulo} style={blanco?{ backgroundColor: '#FAFAFA' }: {}}>
      <h1 className={styles.titulo} style={blanco?{ color: '#121212' }: {}}>{text}</h1>
    </div>
  );
}

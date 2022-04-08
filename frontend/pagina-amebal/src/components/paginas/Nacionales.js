import React from "react";
import styles from "../../styles/Nacionales.module.css";
import Nacional from "../otros/Nacional";
import Titulo from "../otros/Titulo";

export default function Nacionales() {
  return (
    <div>
      <Titulo text="NACIONALES" />
      <div className={styles.sector_nacionales}>
        <Nacional nacional="Menores 2022" />
        <Nacional nacional="Menores 2021" />
        <Nacional nacional="Cadetes 2022" />
        <Nacional nacional="Cadetes 2021s" />
        <Nacional nacional="Cadetes 2021s" />
        <Nacional nacional="Cadetes 2021s" />
        <Nacional nacional="Cadetes 2021s" />
      </div>
    </div>
  );
}

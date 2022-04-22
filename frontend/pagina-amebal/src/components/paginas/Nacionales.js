import React from "react";
import styles from "../../styles/Nacionales.module.css";

import { MDBIcon } from "mdbreact";

import Nacional from "../otros/Nacional";
import Titulo from "../otros/Titulo";

export default function Nacionales() {
  return (
    <div>
      <Titulo text="NACIONALES" />
      <div className="container">
        <form className="form-inline mt-4 mb-4">
          <MDBIcon icon="search" />
          <input
            className="form-control form-control-sm ml-3 w-75"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
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

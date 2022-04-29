import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
import styles from "../../styles/EquiposNav.module.css";

import EQUIPOS from "../../equipos.js";

export default function EquiposNav() {
  if (window.scrollY <= 10) {
    return (
      <div>
        <Navbar
          justify-content="space-evenly"
          expand="lg"
          className={styles.nav}
        >
          {EQUIPOS &&
            EQUIPOS.map((item) => (
              <Navbar.Brand key={item.id}>
                <img src={item.imagen} className={styles.logo} alt="" />
              </Navbar.Brand>
            ))}
        </Navbar>
      </div>
    );
  }
}

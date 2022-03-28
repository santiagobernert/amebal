import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
import styles from "../styles/EquiposNav.module.css";

import IMGS_EQUIPOS from "../imgs/index.js";

export default function EquiposNav() {
  return (
    <div>
      <Navbar justify-content="space-evenly" expand="lg" className={styles.nav}>
        {IMGS_EQUIPOS &&
          IMGS_EQUIPOS.map((item) => (
            <Navbar.Brand key={item.id}>
              <img src={item.imagen} className={styles.logo} alt="" />
            </Navbar.Brand>
          ))}
      </Navbar>
    </div>
  );
}

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
import styles from "../../styles/otros/equiposnav/EquiposNav.module.css";

import EQUIPOS from "../../lists/equipos.js";

export default function EquiposNav() {
  if (window.scrollY <= 10) {
    return (
      <div>
        <nav
          justify-content="space-evenly"
          className={styles.nav}
        >
          {EQUIPOS &&
            EQUIPOS.map((item) => (
              <div key={item.id}>
                <img src={item.imagen} className='' alt="" />
              </div>
            ))}
        </nav>
      </div>
    );
  }
}

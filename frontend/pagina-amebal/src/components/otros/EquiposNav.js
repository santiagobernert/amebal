import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import styles from "../../styles/otros/equiposnav/EquiposNav.module.css";

import EQUIPOS from "../../lists/equipos.js";

export default function EquiposNav() {
    return (
      <div className={styles.box}>
       <div className={styles.shadow1}></div>
       <div className={styles.shadow2}></div>
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


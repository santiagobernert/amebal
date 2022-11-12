import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import styles from "../../styles/otros/equiposnav/EquiposNav.module.css";

import EQUIPOS from "../../lists/equipos.js";

export default function EquiposNav() {
  const [clubes, setClubes] = useState([]);

  const getClubes = () => {
    fetch("http://localhost:8000/club")
      .then((res) => res.json())
      .then((responseJson) => {
        setClubes(responseJson.clubes);
        return responseJson;
      });
  };

  useEffect(() => {
    getClubes()
  }, []);

    return (
      <div className={styles.box}>
       <div className={styles.shadow1}></div>
       <div className={styles.shadow2}></div>
        <nav
          justify-content="space-evenly"
          className={styles.nav}
        >
          {clubes &&
            clubes.map((club) => (
              <div key={club.id}>
                <img src={club.escudo} alt={club.nombrecorto} />
              </div>
            ))}
        </nav>
      </div>
    );
  }


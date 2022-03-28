import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
import styles from "./EquiposNav.module.css";

import capital from "./imgs/equipos/capital.png";
import etiec from "./imgs/equipos/etiec.png";
import filippini from "./imgs/equipos/filippini.png";
import gimnasia from "./imgs/equipos/gimnasia_y_esgrima.png";
import tomba from "./imgs/equipos/godoy_cruz.png";
import junin from "./imgs/equipos/junin.png";
import lujan from "./imgs/equipos/lujan.png";
import maipu from "./imgs/equipos/maipu.png";
import palmira from "./imgs/equipos/palmira.png";
import regatas from "./imgs/equipos/regatas.png";
import rodeo from "./imgs/equipos/rodeo-del-medio.png";
import russel from "./imgs/equipos/russel.png";
import tunuyan from "./imgs/equipos/tunuyan.png";
import tupungato from "./imgs/equipos/tupungato.png";
import uncuyo from "./imgs/equipos/uncuyo.png";

export default function EquiposNav() {
  return (
    <div>
      <Navbar justify-content="space-evenly" expand="lg" className={ styles.nav }>
        <Navbar.Brand>
          <img className={styles.logo} src={tomba} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img className={styles.logo} src={regatas} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img className={styles.logo} src={etiec} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img className={styles.logo} src={gimnasia} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img className={styles.logo} src={junin} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img className={styles.logo} src={lujan} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img className={styles.logo} src={maipu} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img className={styles.logo} src={capital} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img className={styles.logo} src={palmira} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img className={styles.logo} src={tunuyan} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img className={styles.logo} src={tupungato} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img className={styles.logo} src={filippini} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img className={styles.logo} src={rodeo} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img className={styles.logo} src={russel} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img className={styles.logo} src={uncuyo} alt="" />
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

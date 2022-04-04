import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav } from "react-bootstrap";
import styles from "../styles/Footer.module.css";

import logocd from "../imgs/logo-amebal-cd.png";
import ubicacion from "../imgs/ubicacion-logo.png";
import instagram from "../imgs/instagram-logo.png";
import facebook from "../imgs/facebook-logo.png";
import twitter from "../imgs/twitter-logo.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Navbar bg="dark" variant="dark" className="container">
        <div className="col col-md-6">
          <Navbar.Brand>
          <img src={logocd} style={{ width: "3.5rem" }} />
          <h3>Asociación Mendocina de Balonmano</h3> 
        </Navbar.Brand>
        </div>
        
        <Nav className="justify-content-end text-right container pr-1">
          <Nav.Link href="ubicacion">
            <img className={styles.icon} src={ubicacion} alt="ubicacion" />
            San Juan 816, Capital, Mendoza
          </Nav.Link>
          <Nav.Link href="instagram">
            <img className={styles.icon} src={instagram} alt="instagram" />
            @Balonamebal
          </Nav.Link>
          <Nav.Link href="twitter">
            <img className={styles.icon} src={twitter} alt="twitter" />
            @Amebal0
          </Nav.Link>
          <Nav.Link href="facebook">
            <img className={styles.icon} src={facebook} alt="facebook" />
            Amebalmendoza
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

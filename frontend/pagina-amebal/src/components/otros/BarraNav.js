import React from "react";
import "../../App.css";
import styles from "../../styles/BarraNav.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../imgs/logohz.png";

export default function BarraNav() {
  return (
    <div>
      <Navbar className={styles.barranav} expand="md" collapseOnSelect>
        <Navbar.Brand>
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className={styles.nav_options}>
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/nacionales">Nacionales</Nav.Link>
            <Nav.Link href="/fixture">Fixture</Nav.Link>
            <Nav.Link href="/posiciones">Posiciones</Nav.Link>
            <Nav.Link href="/clubes">Clubes</Nav.Link>
            <Nav.Link href="/institucional">Institucional</Nav.Link>
            <Nav.Link href="/sistema">Sistema</Nav.Link>
            <Nav.Link href="/descargas">Descargas</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

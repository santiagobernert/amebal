import React from "react";
import "../../App.css";
import styles from "../../styles/otros/barranav/BarraNav.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../imgs/logo-amebal-cd.png";

export default function BarraNav() {
  return (
    <div>
      <Navbar className={styles.barranav} expand="md" collapseOnSelect>
        <Navbar.Brand>
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <button>
          <div className="menu-btn"></div>
        </button>
        <Navbar.Collapse className="justify-content-end">
          <Nav className={styles.nav_options}>
            <Nav.Link href="/">Inicio</Nav.Link>
            <hr></hr>
            <Nav.Link href="/nacionales">Nacionales</Nav.Link>
            <hr></hr>
            <Nav.Link href="/fixture">Fixture</Nav.Link>
            <hr></hr>
            <Nav.Link href="/posiciones">Posiciones</Nav.Link>
            <hr></hr>
            <Nav.Link href="/clubes">Clubes</Nav.Link>
            <hr></hr>
            <Nav.Link href="/institucional">Institucional</Nav.Link>
            <hr></hr>
            <Nav.Link href="/sistema">Sistema</Nav.Link>
            <hr></hr>
            <Nav.Link href="/descargas">Descargas</Nav.Link>
            <hr></hr>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

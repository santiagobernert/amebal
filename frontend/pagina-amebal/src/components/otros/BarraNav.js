import React, {useState} from "react";
import "../../App.css";
import styles from "../../styles/otros/barranav/BarraNav.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../imgs/logo-amebal-cd.png";

export default function BarraNav() {
  const [menuOpen, setOpen] = useState(false)
  const open = () => {
    setOpen(!menuOpen);
  }
  return (
    <div>
      <Navbar className={styles.barranav} expand="md">
        <Navbar.Brand>
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <button className={menuOpen ? `${styles.menu_btn} ${styles._open}` : styles.menu_btn} onClick={open}>
          <div className={styles.menu_btn_line1}></div>
          <div className={styles.menu_btn_line2}></div>
          <div className={styles.menu_btn_line3}></div>
        </button>
        <div className={`${styles.navs} ${menuOpen ? styles.show : styles.collapse}`}>
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
        </div>
      </Navbar>
    </div>
  );
}

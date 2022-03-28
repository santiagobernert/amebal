import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../imgs/logohz.png";

export default function BarraNav() {
  return (
    <div>
      <Navbar className="barranav" expand="md" collapseOnSelect>
        <Navbar.Brand>
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="right-aligned">
          <Nav>
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/nacionales">Nacionales</Nav.Link>
            <Nav.Link href="/fixture">Fixture</Nav.Link>
            <Nav.Link href="/posiciones">Posiciones</Nav.Link>
            <Nav.Link href="/club">Club</Nav.Link>
            <Nav.Link href="/institucional">Institucional</Nav.Link>
            <Nav.Link href="/descargas">Descargas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

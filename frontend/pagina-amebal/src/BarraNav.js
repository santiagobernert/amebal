import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav } from "react-bootstrap";
//import styles from "./BarraNav.module.css";

export default function BarraNav() {
  return (
    <div>
        <Navbar bg="dark">
            <Navbar.Brand>
                <img src="https://placedog.net/100/60"/>
            </Navbar.Brand>
            <Navbar.Collapse className="right-aligned">
                <Nav>
                    <Nav.Link className="text-light" href="/">Inicio</Nav.Link>
                    <Nav.Link className="text-light" href="/fixture">Fixture</Nav.Link>
                    <Nav.Link className="text-light" href="/posiciones">Posiciones</Nav.Link>
                    <Nav.Link className="text-light" href="/club">Club</Nav.Link>
                    <Nav.Link className="text-light" href="/institucional">Institucional</Nav.Link>
                    <Nav.Link className="text-light" href="/descargas">Descargas</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

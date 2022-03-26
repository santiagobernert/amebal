import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
import styles from "./EquiposNav.module.css";

export default function EquiposNav({link}) {
  return (
    <div>
      <Navbar justify-content="space-evenly" expand="lg" className={ styles.nav }>
        <Navbar.Brand>
          <img src={link} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img src={link} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img src={link} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img src={link} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img src={link} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img src={link} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img src={link} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img src={link} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img src={link} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img src={link} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img src={link} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img src={link} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img src={link} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img src={link} alt="" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img src={link} alt="" />
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

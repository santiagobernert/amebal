import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav } from "react-bootstrap";
import logocd from "./imgs/logo-amebal-cd.png";

export default function Footer() {
    const ubicacion = 'https://placedog.net/40/40';
    const instagram = 'https://placedog.net/40/40';
    const twitter = 'https://placedog.net/40/40';
    const facebook = 'https://placedog.net/40/40';
  return (
    <div className='footer'>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <img src={logocd} style={{ width:'5rem' }}/>
                Asociación Mendocina de Balonmano
            </Navbar.Brand>
            <Nav.Link href="ubicacion">
                <img src={ubicacion} alt="ubicacion" />
                San Juan 816, Capital, Mendoza
            </Nav.Link>
            <Nav.Link href="instagram">
                <img src={instagram} alt="instagram" />
                @Balonamebal
            </Nav.Link>
            <Nav.Link href="twitter">
                <img src={twitter} alt="twitter" />
                @Amebal0
            </Nav.Link>
            <Nav.Link href="facebook">
                <img src={facebook} alt="facebook" />
                Amebalmendoza
            </Nav.Link>
        </Navbar>
    </div>
  )
}

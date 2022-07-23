import React from 'react'
import { Card, CardGroup, Container } from "react-bootstrap";
import styles from '../../styles/otros/login/Login.module.css'
import Titulo from "../otros/Titulo";

import instagram from "../../imgs/instagram-logo.png";
import facebook from "../../imgs/facebook-logo.png";
import twitter from "../../imgs/twitter-logo.png";

export default function Contacto() {
  return (
    <div>
        <Titulo text="Contacto" />
        <div className={styles.blob}></div>
        <Container>
            <CardGroup>
                <Card className="bg-transparent border-0 text-center mb-3 pt-3 justify-content-center">
                <Card.Title className="text-light">Horarios</Card.Title>
                <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53602.89746442965!2d-68.93297196875!3d-32.89337999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09aef0d9b057%3A0xab741a983b2e45f1!2sClub%20Mendoza%20de%20Regatas!5e0!3m2!1ses-419!2sar!4v1658177176039!5m2!1ses-419!2sar"
                 style={{border:"0", width:"70vw", height:"32vh", alignSelf: "center"}} 
                 allowfullscreen="" 
                 loading="lazy" 
                 referrerpolicy="no-referrer-when-downgrade"></iframe>
                <Card.Body>
                    <div className="row">
                        <div className="col d-flexf flex-column">
                            <p>Lunes</p>
                            <p>Martes</p>
                            <p className="text-light">__</p>
                            <p>Miércoles</p>
                            <p>Jueves</p>
                            <p>Viernes</p>
                        </div>
                        <div className="col d-flexf flex-column">
                            <p>13:30 a 17:00hs</p>
                            <p>9:30 a 13:00hs</p>
                            <p>14:30 a 18:00hs</p>
                            <p>9:30 a 13:00hs</p>
                            <p>No se atiende</p>
                            <p>14:30 a 18:00 hs</p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Card className="bg-transparent border-0 text-center mb-3 pt-3 justify-content-center">
                <Card.Title>Consultas</Card.Title>
                <Card.Body className="d-inline-flex align-items-center"><Card.Img src="https://placedog.net/20/30" alt="mail" style={{ width: "2rem", marginRight: "1rem" }} />mesadeentrada@amebal.com</Card.Body>
            </Card>
            <Card className="bg-transparent border-0 text-center mb-3 pt-3 justify-content-center">
                <Card.Title>Redes</Card.Title>
                
                <Card.Body className="d-inline-flex align-items-center"><Card.Img src={instagram} alt="redes" style={{ width: "2rem", marginRight: "1rem" }} />@balonamebal</Card.Body>
                
                <Card.Body className="d-inline-flex align-items-center"><Card.Img src={facebook} alt="redes" style={{ width: "2rem", marginRight: "1rem" }} />@balonamebal</Card.Body>
                
                <Card.Body className="d-inline-flex align-items-center"><Card.Img src={twitter} alt="redes" style={{ width: "2rem", marginRight: "1rem" }} />@balonamebal</Card.Body>
            </Card>
            </CardGroup>
            
        </Container>
    </div>
  )
}

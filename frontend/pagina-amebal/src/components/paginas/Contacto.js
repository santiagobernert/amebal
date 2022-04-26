import React from 'react'
import { Card, CardGroup, Container } from "react-bootstrap";

export default function Contacto() {
  return (
    <div>
        <Container>
            <CardGroup>
                <Card>
                <Card.Title>Horarios</Card.Title>
                <Card.Img src="https://placedog.net/200/200" alt="ubicacion" style={{ width: "15rem" }} />
                <Card.Body>Lunes de 13:30 a 17:00hs
                            Martes de 9:30 a 13:00hs
                            Martes de 14:30 a 18:00hs
                            Miércoles de 9:30 a 13:00hs
                            Jueves no se atiende
                            Viernes de 14:30 a 18:00 hs
                </Card.Body>
            </Card>
            <Card>
                <Card.Title>Consultas</Card.Title>
                <Card.Img src="https://placedog.net/200/200" alt="mail" style={{ width: "15rem" }} />
                <Card.Body>mesadeentrada@amebal.com
                </Card.Body>
            </Card>
            <Card>
                <Card.Title>Redes</Card.Title>
                <Card.Img src="https://placedog.net/200/200" alt="redes" style={{ width: "15rem" }} />
                <Card.Body>@balonamebal</Card.Body>
                <Card.Img src="https://placedog.net/200/200" alt="redes" style={{ width: "15rem" }} />
                <Card.Body>@balonamebal</Card.Body>
                <Card.Img src="https://placedog.net/200/200" alt="redes" style={{ width: "15rem" }} />
                <Card.Body>@balonamebal</Card.Body>
            </Card>
            </CardGroup>
            
        </Container>
    </div>
  )
}

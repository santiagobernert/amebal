import React from 'react'

import Titulo from "../otros/Titulo";
import { Row, Col, Container, Image } from "react-bootstrap";

export default function Noticia({ titulo, img, cuerpo, derecha, principal}) {
  return (
    <Container>
        {principal? <Row><Image fluid src={img} /></Row> : null}
        <Row xs={4} className="justify-content-md-center">
            {principal? <h2>{titulo}</h2> : <Titulo text={titulo} />}
        </Row>
        <Row>
            {derecha?<Col sm={principal? 12 : 8}><p>{cuerpo}</p></Col> : null}
            {principal? null : <Col sm={4}><Image src={img} /></Col>}
            {derecha? null : <Col sm={principal? 12 : 8}><p>{cuerpo}</p></Col>}
        </Row>
    </Container>
  )
}

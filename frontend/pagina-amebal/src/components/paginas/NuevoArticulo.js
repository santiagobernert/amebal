import React from 'react'
import { Container, InputGroup, FormControl } from 'react-bootstrap'

export default function NuevoArticulo() {
  return (
    <div>
        <Container>
            <InputGroup>
                <InputGroup.Text>Imagen del articulo</InputGroup.Text>
                <input type="file" accept="image/*" />
            </InputGroup>
            <InputGroup>
                <InputGroup.Text>Titulo del articulo</InputGroup.Text>
                <FormControl placeholder="Titulo de la Noticia" />
            </InputGroup>
            <InputGroup>
                <InputGroup.Text>Cuerpo del articulo</InputGroup.Text>
                <FormControl placeholder="Cuerpo de la noticia" />
            </InputGroup>
        </Container>
    </div>
  )
}

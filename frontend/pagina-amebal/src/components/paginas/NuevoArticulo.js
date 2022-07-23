import React from 'react'
import { Container, InputGroup, FormControl } from 'react-bootstrap'

export default function NuevoArticulo() {
  return (
    <div>
        <Container className="p-4">
            <InputGroup className="d-block">
                <InputGroup.Text>Imagen del articulo</InputGroup.Text>
                <input className="mb-3" type="file" accept="image/*" />

                <InputGroup.Text>Titulo del articulo</InputGroup.Text>
                <FormControl className="mb-3 w-100" placeholder="Titulo" />

                <InputGroup.Text>Cuerpo del articulo</InputGroup.Text>
                <FormControl className="mb-3 w-100" placeholder="Cuerpo" />

                <InputGroup.Text>Cargar desde Word</InputGroup.Text>
                <input className="mb-3" type="file" />
            </InputGroup>
        </Container>
    </div>
  )
}

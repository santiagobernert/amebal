import React from 'react'
import { Form, Container, Button, FormControl, FormGroup } from 'react-bootstrap'

export default function Login() {
  return (
    <div>
        <Container>
            <Form>
                <h3>Log in</h3>
                <FormGroup>
                    <Form.Label>Usuario</Form.Label>
                    <FormControl placeholder="Nombre de usuario..." />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Contraseña</Form.Label>
                    <input className="form-control" type="password" placeholder="Nombre de usuario..." />
                </FormGroup>
                <Button type="submit" variant="primary" >Login</Button>
            </Form>
        </Container>
    </div>
  )
}

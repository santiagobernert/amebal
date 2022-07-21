import React from 'react'
import { Form, Container, Button, FormControl, FormGroup } from 'react-bootstrap'
import styles from '../../styles/otros/login/Login.module.css'

import logo from "../../imgs/logo-amebal-cd.png";


export default function Login() {
  return (
    <div>
        <div className={styles.blob}></div>
        <div className="pt-5">
            <Container className={styles.login}>
                <img src={logo} />
                <h4>Login</h4>
                <Form>
                    <FormGroup>
                        <FormControl placeholder="Usuario" />
                        <FormControl type="password" placeholder="Contraseña" />
                        <a href="">Olvidé mi clave</a>
                    </FormGroup>
                    <Button type="submit" variant="primary" >Ingresar</Button>
                </Form>
            </Container>
        </div>
        
    </div>
  )
}

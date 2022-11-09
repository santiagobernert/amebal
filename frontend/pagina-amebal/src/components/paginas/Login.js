import React, { useState } from 'react'
import { Form, Container, Button, FormControl, FormGroup } from 'react-bootstrap'
import styles from '../../styles/otros/login/Login.module.css'

import logo from "../../imgs/logo-amebal-cd.png";


export default function Login() {
  const setdata = '';
  const [usuario, setUsuario] = useState({dni: '', contraseña:''});

  function handleChange(e) {
    setUsuario({
        ...usuario,
        [e.target.name]: e.target.value
    })
  }

  const postData = () => {
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(usuario),
    })
      .then((response) => response.json())
      .catch((error) => console.log("post", error));
  };


  return (
    <div>
        <div className={styles.blob}></div>
        <div className="pt-5">
            <Container className={styles.login}>
                <img src={logo} />
                <h4>Login</h4>
                <Form>
                    <FormGroup>
                        <FormControl name='dni' type='number' placeholder="Dni" />
                        <FormControl name='contraseña' type="password" placeholder="Contraseña" />
                        <a href="">Olvidé mi clave</a>
                    </FormGroup>
                    <Button onClick={()=> postData()} type="submit" variant="primary" >Ingresar</Button>
                </Form>
            </Container>
        </div>
        
    </div>
  )
}

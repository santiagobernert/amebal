import React, { useState } from 'react'
import { Form, Container, Button, FormControl, FormGroup } from 'react-bootstrap'
import styles from '../../styles/otros/login/Login.module.css'

import logo from "../../imgs/logo-amebal-cd.png";


export default function Login() {
  const [usuarios, setUsuarios] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    getRoles();
    getData();
  }, []);

  const getRoles = () => {
    fetch("http://localhost:5000/roles")
      .then((res) => res.json())
      .then((responseJson) => {
        setRoles(responseJson);
        return responseJson;
      });
  };

  const getData = () => {
    fetch("http://localhost:5000/usuario")
      .then((res) => res.json())
      .then((responseJson) => {
        setdata(responseJson);
        return responseJson;
      });
  };

  const postData = () => {
    fetch("http://localhost:5000/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .catch((error) => console.log("post", error));
  };

  const putData = () => {
    fetch("http://localhost:5000/usuario", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };

  const deleteData = (id) => {
    fetch("http://localhost:5000/usuario", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(id),
    })
      .then((response) => response.json())
      .catch((error) => console.log("delete", error));
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

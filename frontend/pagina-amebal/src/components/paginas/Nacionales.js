import React from "react";
import styles from "../../styles/Nacionales.module.css";

import { MDBIcon } from "mdbreact";

import Nacional from "../otros/Nacional";
import Titulo from "../otros/Titulo";
import { Dropdown, Form, Button } from "react-bootstrap";

export default function Nacionales() {
  return (
    <div>
      <Titulo text="NACIONALES" />
      <div className="container inline-flex">
        <form className="form-inline mb-3 d-inline-flex">
          <MDBIcon icon="search" />
          <input
            className="form-control form-control-sm ml-3 w-75"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <Dropdown>
            <Dropdown.Toggle>Año</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="2022" />
                  </Form.Group>
                </Form>
              </Dropdown.Item>
              <Dropdown.Item href="">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="2021" />
                  </Form.Group>
                </Form>
              </Dropdown.Item>
              <Dropdown.Item href="">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="2019" />
                  </Form.Group>
                </Form>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="primary" type="submit">
            Submit
          </Button>
      </form>
      </div>
      <div className={styles.sector_nacionales}>
        <Nacional nacional="Menores 2022" />
        <Nacional nacional="Menores 2021" />
        <Nacional nacional="Cadetes 2022" />
        <Nacional nacional="Cadetes 2021s" />
        <Nacional nacional="Cadetes 2021s" />
        <Nacional nacional="Cadetes 2021s" />
        <Nacional nacional="Cadetes 2021s" />
      </div>
    </div>
  );
}
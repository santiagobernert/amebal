import React from "react";
import styles from "../../styles/paginas/nacionales/Nacionales.module.css";

import NACIONALES from "../../lists/nacionales.js";

import Titulo from "../otros/Titulo";
import Buscar from "../otros/Buscar";
import { Dropdown, Form, Button } from "react-bootstrap";

export default function Nacionales() {
  return (
    <div>
      <Titulo text="Nacionales" />
      <div className={styles.blob}></div>
      <div className="container inline-flex px-4 justify-content-between align-items-center">
        <div className="form-inline w-100 d-inline-flex justify-content-between">
          <form className="form-inline py-1 d-inline-flex">
            <input
              className="form-control form-control-sm ml-3"
              type="text"
              placeholder="Buscar"
              aria-label="Search"
            />
          </form>
          <Dropdown className={styles.dropdown}>
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
        </div>
      </div>
      <div className={styles.sector_nacionales}>
        {NACIONALES &&
          NACIONALES.map((item) => (
            <a
              target="blank"
              href={
                "nacionales/" +
                item.categoria.toLowerCase() +
                item.año.toLowerCase() +
                item.sede.replace(" ", "").toLowerCase()
              }
            >
              <div key={item.id} className={styles.btn_nacional}>
                <h5>{`${item.categoria} ${item.año} ${item.sede}`}</h5>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
}

import React from "react";
//import styles from "../styles/paginas/posiciones/Posiciones.module.css";
import { Form, Table } from "react-bootstrap";
import Titulo from "../otros/Titulo";

export default function Posiciones() {
  return (
    <div>
      <Titulo text="POSICIONES" />
      <div className="row">
        <div className="col">
          <h3>Categoría</h3>
          <div>
            <Form.Select aria-label="Default select example">
              <option selected value="liga">Liga</option>
              <option value="1">Mayores</option>
              <option value="1">Junior</option>
              <option value="2">Juvenil</option>
              <option value="3">Cadetes</option>
              <option value="3">Menores</option>
              <option value="3">Infantiles</option>
            </Form.Select>
            <Form.Select aria-label="Default select example">
              <option selected value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </Form.Select>
          </div>
          <div>
          <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>_</th>
                  <th>Club</th>
                  <th>Partidos</th>
                  <th>Ganados</th>
                  <th>Perdidos</th>
                  <th>GF</th>
                  <th>GC</th>
                  <th>DG</th>
                  <th>Puntos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>[]</td>
                  <td>Regatas</td>
                  <td>9</td>
                  <td>9</td>
                  <td>0</td>
                  <td>100</td>
                  <td>10</td>
                  <td>90</td>
                  <td>27</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>[]</td>
                  <td>Regatas</td>
                  <td>9</td>
                  <td>9</td>
                  <td>0</td>
                  <td>100</td>
                  <td>10</td>
                  <td>90</td>
                  <td>27</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>[]</td>
                  <td>Regatas</td>
                  <td>9</td>
                  <td>9</td>
                  <td>0</td>
                  <td>100</td>
                  <td>10</td>
                  <td>90</td>
                  <td>27</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="col">
          <h3>Goleadores</h3>
          <Table>
          <thead>
                <tr>
                  <th>#</th>
                  <th>_</th>
                  <th>Nombre</th>
                  <th>Goles</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>[]</td>
                  <td>Regatas</td>
                  <td>9</td>
                </tr>
              </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

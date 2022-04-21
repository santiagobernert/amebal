import React from "react";
import { Card, Table } from "react-bootstrap";

import Titulo from "../otros/Titulo.js";

export default function Club({ nombre, imagen }) {
  return (
    <div>
      <div>
        <Titulo text={nombre} />
        <div className="container">
          <div className="row">
            <div className="col">
              <Card>
                <Card.Img
                  src={imagen}
                  alt={nombre}
                  style={{ width: "20rem" }}
                />
                <Card.Title>{nombre}</Card.Title>
              </Card>
            </div>
            <div className="col container">
              <h2>Posiciones</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Categoría</th>
                    <th>Posición</th>
                    <th>Jugados</th>
                    <th>Ganados</th>
                    <th>Perdidos</th>
                    <th>Empatados</th>
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
              <Table>
                <thead>
                  <tr>
                    <th>Categoría</th>
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
      </div>
    </div>
  );
}

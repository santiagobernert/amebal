import React from "react";
import styles from "../../styles/Articulo.module.css";
import Titulo from "../otros/Titulo";
import Articulo from "../otros/Articulo";
import Noticia from "../otros/Noticia";
import { Row, Container } from "react-bootstrap";

export default function Institucional() {
  return (
    <div>
      <Titulo text="INSTITUCIONAL" />
      <div className={`container ${styles.sector_articulos}`}>
        <Row className="justify-content-md-center">
            <Articulo
              titulo="Escuela de Entrenadores"
              imagesrc="https://placedog.net/100/100"
            />
            <Articulo
              titulo="Escuela de Arbitros"
              imagesrc="https://placedog.net/100/100"
            />
            <Articulo
              titulo="Competencias de la CAH 2022"
              imagesrc="https://placedog.net/100/100"
            />
        </Row>
      </div>
      <Container bg="light" text="dark" >
        <h2>Historia de la institución</h2>
      </Container>
      <Container>
        <Noticia titulo="Inicios" img="https://placedog.net/200/150" cuerpo="En el marco de un generoso trabajo federal de formación y detección de talentos que lleva a cabo la Selección Juvenil a cargo de Rubén Busolín, del miércoles al sábado pasado concentraron en el CeNARD 29 jugadores de ocho afiliadas y siete provincias argentinas: Mendoza, Córdoba, San Luis, Chaco, Río Negro, Neuquén y Buenos Aires a través de Mar del Plata (Atlántica) y Los Toldos (AsAmBal). La nómina total de trabajo de este año incluye a 165 jugadores." />
        <Noticia derecha={true} titulo="Inicios" img="https://placedog.net/150/150" cuerpo="En el marco de un generoso trabajo federal de formación y detección de talentos que lleva a cabo la Selección Juvenil a cargo de Rubén Busolín, del miércoles al sábado pasado concentraron en el CeNARD 29 jugadores de ocho afiliadas y siete provincias argentinas: Mendoza, Córdoba, San Luis, Chaco, Río Negro, Neuquén y Buenos Aires a través de Mar del Plata (Atlántica) y Los Toldos (AsAmBal). La nómina total de trabajo de este año incluye a 165 jugadores." />
      </Container>
    </div>
  );
}
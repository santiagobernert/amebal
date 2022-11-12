import React, { useEffect, useState } from "react";
import { CardGroup } from "react-bootstrap";
import ClubCard from "../otros/ClubCard";
import styles from "../../styles/paginas/clubes/Clubes.module.css";
import Titulo from "../otros/Titulo";
import EQUIPOS from "../../lists/equipos.js";

export default function Clubes() {
  const [clubes, setClubes] = useState([]);

  const getClubes = () => {
    fetch("http://localhost:8000/club")
      .then((res) => res.json())
      .then((responseJson) => {
        setClubes(responseJson.clubes);
        return responseJson;
      });
  };

  useEffect(() => {
    getClubes()
  }, []);

  return (
    <div>
      <Titulo text="Clubes" />
      <div className={styles.blob}></div>
      <div className={styles.descripcion}>
        <h5>Son más de 15 los clubes que  pertenecen a nuestra institución, los cuales cuentan con equipos en varias categorías. Siempre estamos abiertos a nuevas inscripciones.</h5>
      </div>
      <CardGroup className={styles.div_clubes}>
        {clubes &&
          clubes.map((item) => (
            <ClubCard key={item.id} img={item.escudo} titulo={item.nombre} />
          ))}
      </CardGroup>
    </div>
  );
}

import React from "react";
import styles from "../../styles/otros/articulo/Articulo.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";

export default function Articulo({ titulo, img, principal }) {
  const p = principal;
  return (
    <div className={`${styles.articulo} ${p ? styles.principal : ""}`}>
      <Card className="col bg-transparent mh-20vh border-0">
        <a href={"noticias/" + titulo.replace(/ /g, "").toLowerCase()}>
          <Card.Img src={img} alt={titulo} />
          <Card.ImgOverlay className="d-flex align-items-end">
            <Card.Title className={styles.articulo_title}>{titulo}</Card.Title>
          </Card.ImgOverlay>
        </a>
      </Card>
    </div>
  );
}

import React from "react";
import styles from "../styles/Articulo.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";

export default function Articulo({ titulo, imagesrc, principal }) {
  const p = principal;
  return (
    <div className={`${styles.articulo} ${p ? styles.principal : ""}`}>
      <Card className="col">
        <Card.Img src={imagesrc} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="flex-end">{titulo}</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

import React from "react";
import styles from "../styles/Articulo.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";

export default function Articulo({ titulo, imagesrc, width, principal }) {
  const p = principal;
  return (
    <div className={(styles.articulo, p ? styles.principal : "", "col")}>
      <Card
        className="bg-none text-white border-none cursor-pointer col"
        style={{ width: width, cursor: "pointer" }}
      >
        <Card.Img src={imagesrc} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="flex-end">{titulo}</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

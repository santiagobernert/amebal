import React from "react";
import { Card } from "react-bootstrap";

export default function ClubCard({ img, titulo }) {
  return (
    <div>
      <a href={"clubes/" + titulo.replace(/ /g, "").toLowerCase()}>
        <Card>
          <Card.Img src={img} alt={titulo} style={{ width: "15rem" }} />
          <Card.Title>{titulo}</Card.Title>
        </Card>
      </a>
    </div>
  );
}

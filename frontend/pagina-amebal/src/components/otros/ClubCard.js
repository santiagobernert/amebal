import React from "react";
import { Card } from "react-bootstrap";

export default function ClubCard({ img, titulo }) {
  return (
    <div>
      <Card className="bg-transparent border-0 text-center mb-3">
        <a className="text-dark" href={"clubes/" + titulo.replace(/ /g, "").toLowerCase()}>
          <Card.Img className="max-vw-30" src={img} alt={titulo} style={{ width: "15rem" }} />
          <Card.Title className="h6">{titulo}</Card.Title>
        </a>
      </Card>
    </div>
  );
}

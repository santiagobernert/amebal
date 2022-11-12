import React from "react";
import { Card } from "react-bootstrap";

export default function ClubCard({ img, titulo }) {
  return (
    <div>
      <Card className="bg-transparent border-0 text-center m-5">
        <a
          className="text-dark"
          href={"clubes/" + titulo.replace(/ /g, "").toLowerCase()}
        >
          <Card.Img
            className="max-vw-30"
            src={img}
            alt={titulo}
            style={{ width: "auto", height: "10rem"}}
          />
          <Card.Title className="h6">{titulo}</Card.Title>
        </a>
      </Card>
    </div>
  );
}

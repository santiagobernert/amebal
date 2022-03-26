import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";


export default function Articulo({titulo, imagesrc, width}) {
  return (
    <div className='articulo'>
        <Card className="bg-dark text-white border-none col" style={{ width: width}}>
          <Card.Img src={imagesrc} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>{titulo}</Card.Title>
          </Card.ImgOverlay>
        </Card>
    </div>
  )
}

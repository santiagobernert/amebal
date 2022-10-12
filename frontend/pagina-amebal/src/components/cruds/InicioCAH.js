import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";
export default function Inicio() {
  let cruds = [
    "asociaciones",
    "clubes",
    "jugadores",
    "partidos",
    "pases",
    "usuarios",
    "sedes",
  ];
  return (
    <div>
      <div className="container">
        <div className="text-center my-5">
          <h1>Confederación Argentina de Handball</h1>
        </div>
      </div>
      <div>
        <div className="container">
          <h4>Tablero de control</h4>
          <div className="d-flex w-100 justify-content-evenly">
            {cruds.map((item) => (
              <a
                className="text-decoration-none text-white bg-primary p-2 rounded"
                target="blank"
                href={"crud/" + item}
              >
                <div key={cruds.indexOf(item)}>
                  <h5>{item}</h5>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

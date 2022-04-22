import React from "react";

export default function Archivo({ nombre }) {
  return (
    <div
      style={{
        display: "inline-flex",
        verticalAlign: "middle",
        alignItems: "center",
      }}
    >
      <img src="https://placedog.net/200/100" alt="filetype" />
      <h4>{nombre}</h4>
    </div>
  );
}

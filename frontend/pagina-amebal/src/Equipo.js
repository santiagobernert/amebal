import React from "react";

export default function Equipo(link) {
  return (
    <div>
      <img
        src={link}
        alt="Equipo"
        style={{ width: 5 + "rem", height: 5 + "rem" }}
      />
    </div>
  );
}

import React, { useState } from "react";
import styles from "../../styles/paginas/inicio/Inicio.module.css";

function Buscar() {
  const [searchOpen, setOpen] = useState(false);
  const open = () => {
    setOpen(!searchOpen);
  };
  return (
    <div className={`${styles.search} ${searchOpen ? styles.open : ""}`}>
      <form className="form-inline mb-3 d-inline-flex">
        <input
          className={`form-control form-control-sm ml-3 w-75 ${
            searchOpen ? styles.open : ""
          }`}
          type="text"
          placeholder="Buscar"
          aria-label="Search"
        />
      </form>
      <button type="" onClick={open}></button>
    </div>
  );
}

export default Buscar;

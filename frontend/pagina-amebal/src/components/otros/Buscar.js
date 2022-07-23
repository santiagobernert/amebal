import React, { useState } from "react";
import styles from "../../styles/paginas/inicio/Inicio.module.css";

function Buscar({blanco}) {
  const [searchOpen, setOpen] = useState(false);
  const open = () => {
    setOpen(!searchOpen);
  };
  return (
    <div className={`${styles.search} ${searchOpen ? styles.open : ""}`}>
      <div className={styles.searchbar}>
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
      </div>
      <div className={styles.searchbtn}>
        <button style={blanco?{ background: "url('https://uploads-ssl.webflow.com/6180454f6657fc1e89fcd2d8/627befb8c708fc401f45cd9e_Mag-glass-icon.svg') 0px 1px no-repeat", backgroundSize: "contain" } : {}} type="" onClick={open}></button>
      </div>
    </div>
  );
}

export default Buscar;

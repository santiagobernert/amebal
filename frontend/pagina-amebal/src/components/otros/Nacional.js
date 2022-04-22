import React from "react";
import styles from "../../styles/Nacionales.module.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Nacional({ nacional }) {
  return (
    <div>
      <button className={styles.btn_nacional}>{nacional}</button>
    </div>
  );
}

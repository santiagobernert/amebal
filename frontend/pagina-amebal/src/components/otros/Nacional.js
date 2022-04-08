import React from "react";
import styles from "../../styles/Nacionales.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";

export default function Nacional({ nacional }) {
  return (
    <div>
      <button className={styles.btn_nacional}>{nacional}</button>
    </div>
  );
}

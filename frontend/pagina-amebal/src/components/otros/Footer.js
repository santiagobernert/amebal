import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../../styles/otros/footer/Footer.module.css";

import logocd from "../../imgs/logo-amebal-cd.png";
import ubicacion from "../../imgs/ubicacion-logo.png";
import instagram from "../../imgs/instagram-logo.png";
import facebook from "../../imgs/facebook-logo.png";
import twitter from "../../imgs/twitter-logo.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.brand}>
        <img className={styles.logo_grande} src={logocd} alt="logo" />
        <h5>Asociación Mendocina de Balonmano</h5>
      </div>
      <div className={styles.nav_links}>
        <h4>Ubicación</h4>
        <div className={styles.link}>
          <a href="/">
            <img className={styles.icon} src={ubicacion} alt="ubicacion" />
            <p>San Juan 816, Capital, Mendoza</p>
          </a>
        </div>
        <a style={{ marginLeft: "2.3rem" }} href="/contacto">Horarios de atención</a>
        </div>
        <div className={styles.nav_links}>
          <h4>Contacto</h4>
          <div className={styles.link}>
            <a href="/">
              <img className={styles.icon} src={instagram} alt="instagram" />
              <p>@balonamebal</p>
            </a>
          </div>
          <div className={styles.link}>
            <a href="/">
              <img className={styles.icon} src={twitter} alt="twitter" />
              <p>@Amebal0</p>
            </a>
          </div>
          <div className={styles.link}>
            <a href="/">
              <img className={styles.icon} src={facebook} alt="facebook" />
              <p>Amebalmendoza</p>
            </a>
          </div>
        </div>
        </div>
  );
}

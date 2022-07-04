import React from "react";
import styles from "../../styles/otros/nacional/Nacional.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";

import NACIONALES from "../../lists/nacionales.js";
import PARTIDOS from "../../lists/partidos.js";
import Titulo from "./Titulo";
import Noticia from "./Noticia";
import Calendario from "./Calendario";
import Partido from "./Partido";

export default function Nacional({ id }) {
  const nacional = NACIONALES.find((x) => x.id === id);
  return (
    <div>
      <div className={styles.titulo}>
        <Titulo
          text={`${nacional.categoria} ${nacional.año} ${nacional.sede}`}
        />
      </div>
      <Container>
        <Noticia
          principal={true}
          titulo={""}
          img={nacional.img}
          cuerpo={nacional.cuerpo}
        />

        <div className={styles.sector_podios}>
          <div className={styles.podio}>
            <h4 className={styles.subtitulo_azul}>Masculino</h4>
            <div className={styles.equipo}>
              <img
                src={nacional.podio.masculino.primero.img}
                alt={nacional.podio.masculino.primero.nombre}
              />
              <h5>{nacional.podio.masculino.primero.nombre}</h5>
              <img src="https://placedog.net/30/30" alt="Primer Puesto" />
            </div>
            <div className={styles.equipo}>
              <img
                src={nacional.podio.masculino.segundo.img}
                alt={nacional.podio.masculino.segundo.nombre}
              />
              <h5>{nacional.podio.masculino.segundo.nombre}</h5>
              <img src="https://placedog.net/30/30" alt="Segundo Puesto" />
            </div>
            <div className={styles.equipo}>
              <img
                src={nacional.podio.masculino.tercero.img}
                alt={nacional.podio.masculino.tercero.nombre}
              />
              <h5>{nacional.podio.masculino.tercero.nombre}</h5>
              <img src="https://placedog.net/30/30" alt="Tercer Puesto" />
            </div>
          </div>
          <div className={styles.podio}>
            <h4 className={styles.subtitulo_azul}>Femenino</h4>
            <div className={styles.equipo}>
              <img
                src={nacional.podio.masculino.tercero.img}
                alt={nacional.podio.masculino.tercero.nombre}
              />
              <h5>{nacional.podio.masculino.tercero.nombre}</h5>
              <img src="https://placedog.net/30/30" alt="Primer Puesto" />
            </div>
            <div className={styles.equipo}>
              <img
                src={nacional.podio.masculino.tercero.img}
                alt={nacional.podio.masculino.tercero.nombre}
              />
              <h5>{nacional.podio.masculino.tercero.nombre}</h5>
              <img src="https://placedog.net/30/30" alt="Primer Puesto" />
            </div>
            <div className={styles.equipo}>
              <img
                src={nacional.podio.masculino.tercero.img}
                alt={nacional.podio.masculino.tercero.nombre}
              />
              <h5>{nacional.podio.masculino.tercero.nombre}</h5>
              <img src="https://placedog.net/30/30" alt="Primer Puesto" />
            </div>
          </div>
        </div>

        <div className={styles.transmisiones}>
          <iframe className={styles.video} />
          <h5>Links</h5>
          <div className={styles.links}>
            <a
              target="blank"
              href="https://youtube.com"
            >
              <img src="https://cdn-0.smartandroid.fr/wp-content/uploads/2020/10/mettre-youtube-arriere-plan-youtube10.png?ezimgfmt=rs:256x256/rscb9/ng:webp/ngcb9" />
              <h5>{`Final Masculina ${nacional.partidos.masculino.final.equipo1} - ${nacional.partidos.masculino.final.equipo2}`}</h5>
            </a>
            <a
              target="blank"
              href="https://youtube.com"
            >
              <img src="https://cdn-0.smartandroid.fr/wp-content/uploads/2020/10/mettre-youtube-arriere-plan-youtube10.png?ezimgfmt=rs:256x256/rscb9/ng:webp/ngcb9" />
              <h5>{`Final Femenina ${nacional.partidos.femenino.final.equipo1} - ${nacional.partidos.femenino.final.equipo2}`}</h5>
            </a>
            <a
              target="blank"
              href="https://youtube.com"
            >
              <img src="https://cdn-0.smartandroid.fr/wp-content/uploads/2020/10/mettre-youtube-arriere-plan-youtube10.png?ezimgfmt=rs:256x256/rscb9/ng:webp/ngcb9" />
              <h5>{`Semifinal Masculina ${nacional.partidos.masculino.semifinalA.equipo1} - ${nacional.partidos.masculino.semifinalA.equipo2}`}</h5>
            </a>
            <a
              target="blank"
              href="https://youtube.com"
            >
              <img src="https://cdn-0.smartandroid.fr/wp-content/uploads/2020/10/mettre-youtube-arriere-plan-youtube10.png?ezimgfmt=rs:256x256/rscb9/ng:webp/ngcb9" />
              <h5>{`Semifinal Masculina ${nacional.partidos.masculino.semifinalB.equipo1} - ${nacional.partidos.masculino.semifinalB.equipo2}`}</h5>
            </a>
            <a
              target="blank"
              href="https://youtube.com"
            >
              <img src="https://cdn-0.smartandroid.fr/wp-content/uploads/2020/10/mettre-youtube-arriere-plan-youtube10.png?ezimgfmt=rs:256x256/rscb9/ng:webp/ngcb9" />
              <h5>{`Semifinal Femenina ${nacional.partidos.femenino.semifinalA.equipo1} - ${nacional.partidos.femenino.semifinalA.equipo2}`}</h5>
            </a>
            <a
              target="blank"
              href="https://youtube.com"
            >
              <img src="https://cdn-0.smartandroid.fr/wp-content/uploads/2020/10/mettre-youtube-arriere-plan-youtube10.png?ezimgfmt=rs:256x256/rscb9/ng:webp/ngcb9" />
              <h5>{`Semifinal Femenina ${nacional.partidos.femenino.semifinalB.equipo1} - ${nacional.partidos.femenino.semifinalB.equipo2}`}</h5>
            </a>
          </div>
        </div>

        <div className={styles.sector_partidos}>
          <h3>Partidos</h3>
          <h4 className={styles.subtitulo_azul}>Masculino</h4>
          <div className={styles.div_partidos}>
            {PARTIDOS &&
              PARTIDOS.map(
                (item) => (
                  //{if (item.torneo === nacional.nombre){
                  <Partido key={item.id} {...item} />
                )
                //}else{
                //  return <div></div>
                //}}
              )}
          </div>
          <h4 className={styles.subtitulo_azul}>Femenino</h4>
        </div>

        <Calendario />
      </Container>
    </div>
  );
}

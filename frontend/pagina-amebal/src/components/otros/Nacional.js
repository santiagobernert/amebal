import React from "react";
import styles from "../../styles/otros/nacional/Nacional.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "react-bootstrap";

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
      <Row>
        <Col sm={8}>
          <div className={styles.espacio}></div>
          <div className={styles.titulo}>
            <Titulo
              text={`${nacional.categoria} ${nacional.año} ${nacional.sede}`}
            />
          </div>
          <Container className="py-4">
            <Noticia
              principal={true}
              titulo={""}
              img={nacional.img}
              cuerpo={nacional.cuerpo}
            />

            <div className={`${styles.sector_podios} ${styles.mb}`}>
              <div className={styles.podio}>
                <h4 className={styles.subtitulo_azul}>Masculino</h4>
                <div className={styles.equipo}>
                  <img
                    src={nacional.podio.masculino.primero.img}
                    alt={nacional.podio.masculino.primero.nombre}
                  />
                  <h5>{nacional.podio.masculino.primero.nombre}</h5>
                  <img
                    className={styles.img_puesto}
                    src="https://placedog.net/30/30"
                    alt="Primer Puesto"
                  />
                </div>
                <div className={styles.equipo}>
                  <img
                    src={nacional.podio.masculino.segundo.img}
                    alt={nacional.podio.masculino.segundo.nombre}
                  />
                  <h5>{nacional.podio.masculino.segundo.nombre}</h5>
                  <img
                    className={styles.img_puesto}
                    src="https://placedog.net/30/30"
                    alt="Segundo Puesto"
                  />
                </div>
                <div className={styles.equipo}>
                  <img
                    src={nacional.podio.masculino.tercero.img}
                    alt={nacional.podio.masculino.tercero.nombre}
                  />
                  <h5>{nacional.podio.masculino.tercero.nombre}</h5>
                  <img
                    className={styles.img_puesto}
                    src="https://placedog.net/30/30"
                    alt="Tercer Puesto"
                  />
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
                  <img
                    className={styles.img_puesto}
                    src="https://placedog.net/30/30"
                    alt="Primer Puesto"
                  />
                </div>
                <div className={styles.equipo}>
                  <img
                    src={nacional.podio.masculino.tercero.img}
                    alt={nacional.podio.masculino.tercero.nombre}
                  />
                  <h5>{nacional.podio.masculino.tercero.nombre}</h5>
                  <img
                    className={styles.img_puesto}
                    src="https://placedog.net/30/30"
                    alt="Primer Puesto"
                  />
                </div>
                <div className={styles.equipo}>
                  <img
                    src={nacional.podio.masculino.tercero.img}
                    alt={nacional.podio.masculino.tercero.nombre}
                  />
                  <h5>{nacional.podio.masculino.tercero.nombre}</h5>
                  <img
                    className={styles.img_puesto}
                    src="https://placedog.net/30/30"
                    alt="Primer Puesto"
                  />
                </div>
              </div>
            </div>

            <div className={styles.transmisiones}>
              <h5>Links</h5>
              <div className={styles.links}>
                <button className={styles.btn_prev}></button>
                <div id={styles.link1}>
                  <iframe
                    width="853"
                    height="480"
                    src="https://www.youtube.com/embed/mrWCavkjtyc"
                    title='Nacional Cadetes "A" Bariloche 2022 - Final Masc - Vilo VS SAG V Ballester'
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                  <a target="blank" href="https://youtube.com">
                    <h5>{`Final Masculina ${nacional.partidos.masculino.final.equipo1} - ${nacional.partidos.masculino.final.equipo2}`}</h5>
                  </a>
                </div>
                <div id={styles.link2}>
                  <iframe
                    src="https://cdn-0.smartandroid.fr/wp-content/uploads/2020/10/mettre-youtube-arriere-plan-youtube10.png?ezimgfmt=rs:256x256/rscb9/ng:webp/ngcb9"
                    width={400}
                    height={300}
                    className={styles.video}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  />
                  <a target="blank" href="https://youtube.com">
                    <h5>{`Final Femenina ${nacional.partidos.femenino.final.equipo1} - ${nacional.partidos.femenino.final.equipo2}`}</h5>
                  </a>
                </div>
                <div id={styles.link3}>
                  <iframe
                    src="https://cdn-0.smartandroid.fr/wp-content/uploads/2020/10/mettre-youtube-arriere-plan-youtube10.png?ezimgfmt=rs:256x256/rscb9/ng:webp/ngcb9"
                    width={400}
                    height={300}
                    className={styles.video}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  />
                  <a target="blank" href="https://youtube.com">
                    <h5>{`Semifinal Masculina ${nacional.partidos.masculino.semifinalA.equipo1} - ${nacional.partidos.masculino.semifinalA.equipo2}`}</h5>
                  </a>
                </div>
                <div id={styles.link4}>
                  <iframe
                    src="https://cdn-0.smartandroid.fr/wp-content/uploads/2020/10/mettre-youtube-arriere-plan-youtube10.png?ezimgfmt=rs:256x256/rscb9/ng:webp/ngcb9"
                    width={400}
                    height={300}
                    className={styles.video}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  />
                  <a target="blank" href="https://youtube.com">
                    <h5>{`Semifinal Masculina ${nacional.partidos.masculino.semifinalB.equipo1} - ${nacional.partidos.masculino.semifinalB.equipo2}`}</h5>
                  </a>
                </div>
                <div id={styles.link5}>
                  <iframe
                    src="https://cdn-0.smartandroid.fr/wp-content/uploads/2020/10/mettre-youtube-arriere-plan-youtube10.png?ezimgfmt=rs:256x256/rscb9/ng:webp/ngcb9"
                    width={400}
                    height={300}
                    className={styles.video}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  />
                  <a target="blank" href="https://youtube.com">
                    <h5>{`Semifinal Femenina ${nacional.partidos.femenino.semifinalA.equipo1} - ${nacional.partidos.femenino.semifinalA.equipo2}`}</h5>
                  </a>
                </div>
                <div id={styles.link6}>
                  <iframe
                    src="https://cdn-0.smartandroid.fr/wp-content/uploads/2020/10/mettre-youtube-arriere-plan-youtube10.png?ezimgfmt=rs:256x256/rscb9/ng:webp/ngcb9"
                    width={400}
                    height={300}
                    className={styles.video}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  />
                  <a target="blank" href="https://youtube.com">
                    <h5>{`Semifinal Femenina ${nacional.partidos.femenino.semifinalB.equipo1} - ${nacional.partidos.femenino.semifinalB.equipo2}`}</h5>
                  </a>
                </div>
                <button className={styles.btn_next}></button>
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
          </Container>
        </Col>
        <Col sm={4}>
          <div className={styles.espacio}></div>
          <div className={styles.sector_calendario}>
            <Calendario />
          </div>
          <div className={`${styles.sector_podios} ${styles.dk}`}>
            <div className={styles.podio}>
              <h4 className={styles.subtitulo_azul}>Masculino</h4>
              <div className={styles.equipo}>
                <img
                  src={nacional.podio.masculino.primero.img}
                  alt={nacional.podio.masculino.primero.nombre}
                />
                <h5>{nacional.podio.masculino.primero.nombre}</h5>
                <img
                  className={styles.img_puesto}
                  src="https://placedog.net/30/30"
                  alt="Primer Puesto"
                />
              </div>
              <div className={styles.equipo}>
                <img
                  src={nacional.podio.masculino.segundo.img}
                  alt={nacional.podio.masculino.segundo.nombre}
                />
                <h5>{nacional.podio.masculino.segundo.nombre}</h5>
                <img
                  className={styles.img_puesto}
                  src="https://placedog.net/30/30"
                  alt="Segundo Puesto"
                />
              </div>
              <div className={styles.equipo}>
                <img
                  src={nacional.podio.masculino.tercero.img}
                  alt={nacional.podio.masculino.tercero.nombre}
                />
                <h5>{nacional.podio.masculino.tercero.nombre}</h5>
                <img
                  className={styles.img_puesto}
                  src="https://placedog.net/30/30"
                  alt="Tercer Puesto"
                />
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
                <img
                  className={styles.img_puesto}
                  src="https://placedog.net/30/30"
                  alt="Primer Puesto"
                />
              </div>
              <div className={styles.equipo}>
                <img
                  src={nacional.podio.masculino.tercero.img}
                  alt={nacional.podio.masculino.tercero.nombre}
                />
                <h5>{nacional.podio.masculino.tercero.nombre}</h5>
                <img
                  className={styles.img_puesto}
                  src="https://placedog.net/30/30"
                  alt="Primer Puesto"
                />
              </div>
              <div className={styles.equipo}>
                <img
                  src={nacional.podio.masculino.tercero.img}
                  alt={nacional.podio.masculino.tercero.nombre}
                />
                <h5>{nacional.podio.masculino.tercero.nombre}</h5>
                <img
                  className={styles.img_puesto}
                  src="https://placedog.net/30/30"
                  alt="Primer Puesto"
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

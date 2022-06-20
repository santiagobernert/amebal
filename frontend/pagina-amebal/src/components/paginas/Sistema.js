import React from "react";

import styles from "../../styles/paginas/sistema/Sistema.module.css";

import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import Archivo from "../otros/Archivo";
import Titulo from "../otros/Titulo";

export default function Sistema() {
  return (
    <div>
      <Titulo text="Sistema" />
      <div className={styles.main}>
        <nav className={styles.nav}>
          <div className={styles.div_secciones}>
            <button className={styles.btn_seccion}>Perfil</button>
            <button className={styles.btn_seccion}>Datos</button>
            <button className={styles.btn_seccion}>Carnet</button>
            <button className={styles.btn_seccion}>Archivos</button>
            <button className={styles.btn_seccion}>Fichas</button>
          </div>
          <div className={styles.div_salir}>
            <Button>SALIR</Button>
          </div>
        </nav>
        <div className="container text-center">
          <h5 className="text-danger">HABILITADO</h5>
        </div>
        <div className={styles.seccion} id="perfil">
          <h4>Perfil</h4>
          <div className="page-content page-container" id="page-content">
            <div className={styles.padding}>
              <div className="row container d-flex justify-content-center">
                <div className="col-xl-6 col-md-12">
                  <div className={`${styles.card} ${styles.user_card_full}`}>
                    <div className={`row ${styles.m_l_0} ${styles.m_r_0}`}>
                      <div
                        className={`col-sm-4 ${styles.bg_c_lite_green} ${styles.user_profile}`}
                      >
                        <div
                          className={`${styles.card_block} text-center text-white`}
                        >
                          <div className={styles.m_b_25}>
                            <img
                              src="https://img.icons8.com/bubbles/100/000000/user.png"
                              className={styles.img_radius}
                              alt="User-Profile-Image"
                            />
                          </div>
                          <h6 className="f-w-600">Nombre Apellido</h6>
                          <p>HABILITADO</p>
                          <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <div className="card-block">
                          <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                            Información
                          </h6>
                          <div className="row">
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Club</p>
                              <h6 className="text-muted f-w-400">
                                Club Mendoza de Regatas
                              </h6>
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Categoría</p>
                              <h6 className="text-muted f-w-400">Juveniles</h6>
                            </div>
                          </div>
                          <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                            Carnet
                          </h6>
                          <div className="row">
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Nro Carnet</p>
                              <h6 className="text-muted f-w-400">J-025224</h6>
                            </div>
                            <div className="col-sm-6">
                              <p className="m-b-10 f-w-600">Most Viewed</p>
                              <h6 className="text-muted f-w-400">
                                Dinoter husainm
                              </h6>
                            </div>
                          </div>
                          <ul className="social-link list-unstyled m-t-40 m-b-10">
                            <li>
                              <a
                                href="#!"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title
                                data-original-title="facebook"
                                data-abc="true"
                              >
                                <i
                                  className="mdi mdi-facebook feather icon-facebook facebook"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#!"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title
                                data-original-title="twitter"
                                data-abc="true"
                              >
                                <i
                                  className="mdi mdi-twitter feather icon-twitter twitter"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#!"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title
                                data-original-title="instagram"
                                data-abc="true"
                              >
                                <i
                                  className="mdi mdi-instagram feather icon-instagram instagram"
                                  aria-hidden="true"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.seccion} id="datos">
          <h4>datos</h4>
          <h4>Datos del Usuario</h4>
          <div className={styles.seccion_datos}>
            <div className={styles.columna_datos}>
              <>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Apellido</InputGroup.Text>
                  <FormControl
                    placeholder=""
                    aria-label="Apellido"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
                  <FormControl
                    placeholder=""
                    aria-label="Nombre"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon3">DNI</InputGroup.Text>
                  <FormControl
                    type="number"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text>Fecha de Nacimiento</InputGroup.Text>
                  <FormControl type="date" aria-label="Fecha" />
                </InputGroup>

                <InputGroup>
                  <InputGroup.Text>Sexo</InputGroup.Text>
                  <Form.Select aria-label="Sexo">
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                  </Form.Select>
                </InputGroup>
                <hr></hr>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Puesto de Juego</InputGroup.Text>
                  <FormControl type="date" aria-label="Fecha" />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text>Mano Hábil</InputGroup.Text>
                  <Form.Select aria-label="Sexo">
                    <option value="derecha">Derecha</option>
                    <option value="izquierda">Izquierda</option>
                  </Form.Select>
                </InputGroup>
              </>
            </div>
            <div className={styles.columna_datos}>
              <>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Provincia</InputGroup.Text>
                  <Form.Select aria-label="Provincia">
                    <option>Seleccionar</option>
                    <option value="1">CABA</option>
                    <option value="2">Buenos Aires</option>
                    <option value="3">Catamarca</option>
                    <option value="4">Córdoba</option>
                    <option value="5">Corrientes</option>
                    <option value="6">Chaco</option>
                    <option value="7">Chubut</option>
                    <option value="8">Entre Ríos</option>
                    <option value="9">Formosa</option>
                    <option value="10">Jujuy</option>
                    <option value="11">La Pampa</option>
                    <option value="12">La Rioja</option>
                    <option value="13">Mendoza</option>
                    <option value="14">Misiones</option>
                    <option value="15">Neuquén</option>
                    <option value="16">Río Negro</option>
                    <option value="17">Salta</option>
                    <option value="18">San Juan</option>
                    <option value="19">San Luis</option>
                    <option value="20">Santa Cruz</option>
                    <option value="21">Santa Fe</option>
                    <option value="22">Santiago del Estero</option>
                    <option value="23">Tucumán</option>
                    <option value="24">Tierra del Fuego</option>
                  </Form.Select>
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    Departamento
                  </InputGroup.Text>
                  <Form.Select aria-label="Provincia">
                    <option>Seleccionar</option>
                    <option value="50007">Capital</option>
                    <option value="50014">General Alvear</option>
                    <option value="50021">Godoy Cruz</option>
                    <option value="50028">Guaymallén</option>
                    <option value="50035">Junín</option>
                    <option value="50042">La Paz</option>
                    <option value="50049">Las Heras</option>
                    <option value="50056">Lavalle</option>
                    <option value="50063">Luján de Cuyo</option>
                    <option value="50070">Maipú</option>
                    <option value="50077">Malargüe</option>
                    <option value="50084">Rivadavia</option>
                    <option value="50091">San Carlos</option>
                    <option value="50098">San Martín</option>
                    <option value="50105">San Rafael</option>
                    <option value="50112">Santa Rosa</option>
                    <option value="50119">Tunuyán</option>
                    <option value="50126">Tupungato</option>
                  </Form.Select>
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon3">Localidad</InputGroup.Text>
                  <FormControl id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>

                <InputGroup>
                  <InputGroup.Text>Domicilio</InputGroup.Text>
                  <FormControl aria-label="With textarea" />
                </InputGroup>
              </>
            </div>
            <div className={styles.columna_datos}>
              <>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Teléfono</InputGroup.Text>
                  <FormControl
                    type="number"
                    placeholder=""
                    aria-label="Apellido"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">E-mail</InputGroup.Text>
                  <FormControl
                    type="mail"
                    placeholder=""
                    aria-label="Nombre"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon3">Altura</InputGroup.Text>
                  <FormControl
                    type="number"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text>Peso</InputGroup.Text>
                  <FormControl
                    type="number"
                    aria-label="Amount (to the nearest dollar)"
                  />
                </InputGroup>

                <InputGroup>
                  <InputGroup.Text>Grupo Sanguíneo</InputGroup.Text>
                  <Form.Select aria-label="Provincia">
                    <option>Seleccionar</option>
                    <option value="A Factor RH +">A Factor RH +</option>
                    <option value="A Factor RH -">A Factor RH -</option>
                    <option value="B Factor RH +">B Factor RH +</option>
                    <option value="B Factor RH -">B Factor RH -</option>
                    <option value="O Factor RH +">O Factor RH +</option>
                    <option value="O Factor RH -">O Factor RH -</option>
                    <option value="AB Factor RH +">AB Factor RH +</option>
                    <option value="AB Factor RH -">AB Factor RH -</option>
                  </Form.Select>
                </InputGroup>
              </>
            </div>
          </div>
          <h4>Datos familiares y de interés</h4>
          <div className={styles.seccion_datos}>
            <div className={styles.columna_datos}>
              <>
                <Form.Label>Datos del Padre</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    Apellido y Nombre
                  </InputGroup.Text>
                  <FormControl
                    placeholder=""
                    aria-label="Apellido y Nombre del padre"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Tel/Cel</InputGroup.Text>
                  <FormControl
                    type="number"
                    placeholder=""
                    aria-label="Nombre"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon3">E-mail</InputGroup.Text>
                  <FormControl
                    type="e-mail"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text>Trabajo</InputGroup.Text>
                  <FormControl aria-label="Trabajo del padre" />
                </InputGroup>
              </>
            </div>
            <div className={styles.columna_datos}>
              <>
                <Form.Label>Datos de la madre</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    Apellido y Nombre
                  </InputGroup.Text>
                  <FormControl
                    placeholder=""
                    aria-label="Apellido y Nombre de la madre"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Tel/Cel</InputGroup.Text>
                  <FormControl
                    type="number"
                    placeholder=""
                    aria-label="Nombre"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon3">E-mail</InputGroup.Text>
                  <FormControl
                    type="e-mail"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text>Trabajo</InputGroup.Text>
                  <FormControl aria-label="Trabajo de la madre" />
                </InputGroup>
              </>
            </div>
            <div className={styles.columna_datos}>
              <>
                <Form.Label>Urgencias</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Contacto de urgencia</InputGroup.Text>
                  <FormControl
                    placeholder="Nombre y Apellido"
                    aria-label="Contacto urgencia"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text>Tel/Cel</InputGroup.Text>
                  <FormControl type="number" aria-label="Celular" />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text>Médico</InputGroup.Text>
                  <FormControl aria-label="Médico" />
                  <InputGroup.Text>Tel/Cel</InputGroup.Text>
                  <FormControl type="number" aria-label="Celular" />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text>Obra Social</InputGroup.Text>
                  <FormControl aria-label="Obra Social" />
                  <InputGroup.Text>Nro. Carnet</InputGroup.Text>
                  <FormControl type="number" aria-label="Nro. Carnet" />
                </InputGroup>
              </>
            </div>
          </div>
          <div className={styles.seccion_datos}>
            <div className={styles.columna_datos}>
              <h4>Datos Educativos</h4>
              <>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    Institución en la que estudia
                  </InputGroup.Text>
                  <FormControl
                    placeholder=""
                    aria-label="Apellido"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Carrera</InputGroup.Text>
                  <FormControl
                    placeholder=""
                    aria-label="Nombre"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon3">
                    Año de cursado
                  </InputGroup.Text>
                  <FormControl
                    type="number"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                  />
                </InputGroup>
              </>
            </div>
            <div className={styles.columna_datos}>
              <h4>Datos Deportivos</h4>
              <>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    Institución
                  </InputGroup.Text>
                  <FormControl
                    placeholder=""
                    aria-label="Apellido"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    Número de Socio
                  </InputGroup.Text>
                  <FormControl
                    type="number"
                    placeholder=""
                    aria-label="Nombre"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon3">Categoría</InputGroup.Text>
                  <FormControl id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>
              </>
            </div>
          </div>
        </div>
        <div className={styles.seccion} id="carnet">
          <h4>carnet</h4>
          <img src="" alt="carnet" />
          <Archivo />
          <Archivo />
        </div>
        <div className={styles.seccion} id="archivos">
          <h4>Adjuntar archivos</h4>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>DNI</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Ficha Médica</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Estudio Médico</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Pagos</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Autorizacin</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </div>
        <div className={styles.seccion} id="fichas">
          <h3>Fichas</h3>
        </div>
      </div>
    </div>
  );
}

import React from "react";

import { useState } from "react";

import styles from "../../styles/paginas/sistema/Sistema.module.css";

import { Button, Form, FormControl, InputGroup, Table } from "react-bootstrap";
import Archivo from "../otros/Archivo";
import Titulo from "../otros/Titulo";

export default function Sistema() {
  const [pos, setPos] = useState(0);
  let seccionHeight;
  switch (pos) {
    case 0:
      seccionHeight = '40vh';
      break;
    case 1:
      seccionHeight = '270vh';
      break;
    case 2:
      seccionHeight = '70vh';
      break;
    case 3:
      seccionHeight = '120vh';
      break;
  
    default:
      seccionHeight = '100vh';
      break;
  };
  let right1, right2, right3, right4;
  switch (pos) {
    case 0:
      right1 = '0';
      right2 = '-100%';
      right3 = '-200%';
      right4 = '-300%';
      break;
    case 1:
      right1 = '100%';
      right2 = '0';
      right3 = '-100%';
      right4 = '-200%';
      break;
    case 2:
      right1 = '200%';
      right2 = '100%';
      right3 = '0';
      right4 = '-100%';
      break;
    case 3:
      right1 = '300%';
      right2 = '200%';
      right3 = '100%';
      right4 = '0';
      break;
  
    default:
      right1 = '0';
      right2 = '-100%';
      right3 = '-200%';
      right4 = '-300%';
      break;
  }
  return (
    <div>
      <div className="row position-relative">
        <Titulo text="Sistema" />
        <div className={styles.div_salir}>
          <Button>SALIR</Button>
        </div>
      </div>
      <div className={styles.main}>
        <nav className={styles.nav}>
          <div className={styles.selector}></div>
          <div className={styles.div_secciones}>
            <button onClick={() => setPos(0)} className={styles.btn_seccion}>Perfil</button>
            <button onClick={() => setPos(1)} className={styles.btn_seccion}>Datos</button>
            <button onClick={() => setPos(2)} className={styles.btn_seccion}>Carnet</button>
            <button onClick={() => setPos(3)} className={styles.btn_seccion}>Subir archivos</button>
            <button className={styles.btn_seccion}> <a href="/descargas">Descargar archivos</a> </button>
          </div>
        </nav>
        <div className={styles.secciones} style={{height: seccionHeight}}>
          <div className={styles.seccion} id="s1" style={{right:right1}}>
            <div className="page-content page-container" id="page-content">
              <div className="row d-flex justify-content-center">
                <div className="d-flex justify-content-center">
                  <div className={`${styles.card} ${styles.user_card_full}`}>
                    <div className={`row ${styles.m_l_0} ${styles.m_r_0}`}>
                      <div className={styles.user_profile}>
                        <div className={`${styles.card_block} text-center`}>
                          <div>
                            <img
                              src="https://img.icons8.com/bubbles/100/000000/user.png"
                              className={styles.img_radius}
                              alt="User-Profile-Image"
                            />
                          </div>
                          <h6 className="fw-bold fs-5">Nombre Apellido</h6>
                          <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
                        </div>
                      </div>
                      <div>
                        <div className={styles.perfil_datos}>
                          <div>
                            <div>
                              <h6 className="text-muted f-w-400">
                                Club Mendoza de Regatas
                              </h6>
                            </div>
                            <div>
                              <h6 className="text-muted f-w-400">Juvenil</h6>
                            </div>
                          </div>
                          <div>
                            <div>
                              <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                                N° Carnet
                              </h6>
                            </div>
                            <div>
                              <h6 className="text-muted f-w-400">J-025224</h6>
                            </div>
                          </div>
                          <div className="m-3 text-center">
                            <h5 className="fw-bold fs-3">HABILITADO</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.seccion} id="s2" style={{right:right2}}>
            <h4>Datos del Usuario</h4>
            <div className={styles.seccion_datos}>
              <div className={styles.columna_datos}>
                <>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      Apellido
                    </InputGroup.Text>
                    <FormControl
                      className="min-vw-30"
                      placeholder=""
                      aria-label="Apellido"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
                    <FormControl
                      className="min-vw-30"
                      placeholder=""
                      aria-label="Nombre"
                      aria-describedby="basic-addon2"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">DNI</InputGroup.Text>
                    <FormControl
                      className="min-vw-30"
                      type="number"
                      id="basic-url"
                      aria-describedby="basic-addon3"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text>Fecha de Nacimiento</InputGroup.Text>
                    <FormControl
                      className="min-vw-30"
                      type="date"
                      aria-label="Fecha"
                    />
                  </InputGroup>

                  <InputGroup>
                    <InputGroup.Text>Sexo</InputGroup.Text>
                    <Form.Select className="min-vw-30" aria-label="Sexo">
                      <option value="masculino">Masculino</option>
                      <option value="femenino">Femenino</option>
                    </Form.Select>
                  </InputGroup>
                  <hr></hr>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>Puesto de Juego</InputGroup.Text>
                    <FormControl
                      className="min-vw-30"
                      type="date"
                      aria-label="Fecha"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text>Mano Hábil</InputGroup.Text>
                    <Form.Select className="min-vw-30" aria-label="Sexo">
                      <option value="derecha">Derecha</option>
                      <option value="izquierda">Izquierda</option>
                    </Form.Select>
                  </InputGroup>
                </>
              </div>
              <div className={styles.columna_datos}>
                <>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      Provincia
                    </InputGroup.Text>
                    <Form.Select className="min-vw-30" aria-label="Provincia">
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
                    <Form.Select className="min-vw-30" aria-label="Provincia">
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
                    <InputGroup.Text id="basic-addon3">
                      Localidad
                    </InputGroup.Text>
                    <FormControl
                      className="min-vw-30"
                      id="basic-url"
                      aria-describedby="basic-addon3"
                    />
                  </InputGroup>

                  <InputGroup>
                    <InputGroup.Text>Domicilio</InputGroup.Text>
                    <FormControl
                      className="min-vw-30"
                      aria-label="With textarea"
                    />
                  </InputGroup>
                </>
              </div>
              <div className={styles.columna_datos}>
                <>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                      Teléfono
                    </InputGroup.Text>
                    <FormControl
                      className="min-vw-30"
                      type="number"
                      placeholder=""
                      aria-label="Apellido"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">E-mail</InputGroup.Text>
                    <FormControl
                      className="min-vw-30"
                      type="mail"
                      placeholder=""
                      aria-label="Nombre"
                      aria-describedby="basic-addon2"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">Altura</InputGroup.Text>
                    <FormControl
                      className="min-vw-30"
                      type="number"
                      id="basic-url"
                      aria-describedby="basic-addon3"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text>Peso</InputGroup.Text>
                    <FormControl
                      className="min-vw-30"
                      type="number"
                      aria-label="Amount (to the nearest dollar)"
                    />
                  </InputGroup>

                  <InputGroup>
                    <InputGroup.Text>Grupo Sanguíneo</InputGroup.Text>
                    <Form.Select className="min-vw-30" aria-label="Provincia">
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
                      className="min-vw-30"
                      placeholder=""
                      aria-label="Apellido y Nombre del padre"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Tel/Cel</InputGroup.Text>
                    <FormControl
                      className="min-vw-30"
                      type="number"
                      placeholder=""
                      aria-label="Nombre"
                      aria-describedby="basic-addon2"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">E-mail</InputGroup.Text>
                    <FormControl
                      className="min-vw-30"
                      type="e-mail"
                      id="basic-url"
                      aria-describedby="basic-addon3"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text>Trabajo</InputGroup.Text>
                    <FormControl
                      className="min-vw-30"
                      aria-label="Trabajo del padre"
                    />
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
                      className="min-vw-30"
                      placeholder=""
                      aria-label="Apellido y Nombre de la madre"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Tel/Cel</InputGroup.Text>
                    <FormControl
                      className="min-vw-30"
                      type="number"
                      placeholder=""
                      aria-label="Nombre"
                      aria-describedby="basic-addon2"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">E-mail</InputGroup.Text>
                    <FormControl
                      className="min-vw-30"
                      type="e-mail"
                      id="basic-url"
                      aria-describedby="basic-addon3"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text>Trabajo</InputGroup.Text>
                    <FormControl
                      className="min-vw-30"
                      aria-label="Trabajo de la madre"
                    />
                  </InputGroup>
                </>
              </div>
              <div className={styles.columna_datos}>
                <>
                  <Form.Label>Urgencias</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>Contacto de urgencia</InputGroup.Text>
                    <FormControl
                      className="min-vw-30"
                      placeholder="Nombre y Apellido"
                      aria-label="Contacto urgencia"
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>Tel/Cel</InputGroup.Text>
                    <FormControl
                      className="min-vw-30"
                      type="number"
                      aria-label="Celular"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text>Médico</InputGroup.Text>
                    <FormControl className="min-vw-30" aria-label="Médico" />
                    <InputGroup.Text>Tel/Cel</InputGroup.Text>
                    <FormControl
                      className="min-vw-30"
                      type="number"
                      aria-label="Celular"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text>Obra Social</InputGroup.Text>
                    <FormControl
                      className="min-vw-30"
                      aria-label="Obra Social"
                    />
                    <InputGroup.Text>Nro. Carnet</InputGroup.Text>
                    <FormControl
                      className="min-vw-30"
                      type="number"
                      aria-label="Nro. Carnet"
                    />
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
                      className="min-vw-30"
                      placeholder=""
                      aria-label="Apellido"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Carrera</InputGroup.Text>
                    <FormControl
                      className="min-vw-30"
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
                      className="min-vw-30"
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
                      className="min-vw-30"
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
                      className="min-vw-30"
                      type="number"
                      placeholder=""
                      aria-label="Nombre"
                      aria-describedby="basic-addon2"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">
                      Categoría
                    </InputGroup.Text>
                    <FormControl
                      className="min-vw-30"
                      id="basic-url"
                      aria-describedby="basic-addon3"
                    />
                  </InputGroup>
                </>
              </div>
            </div>
          </div>
          <div className={styles.seccion} id="s3" style={{right:right3}}>
            <h4>Carnet</h4>
            <img src="https://placedog.net/100/60" alt="carnet" />
            <div className="w-100 d-flex p-3 justify-content-center">
              <Archivo />
            </div>
          </div>
          <div className={styles.seccion} id="s4" style={{right:right4}}>
            <h4>Adjuntar archivos</h4>
            <div className={styles.archivos}>
              <Form.Group controlId="formFile" className="mb-3 me-5">
                <Form.Label>DNI</Form.Label>
                <Form.Control className="w-auto" type="file" />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3 me-5">
                <Form.Label>Ficha Médica</Form.Label>
                <Form.Control className="w-auto" type="file" />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3 me-5">
                <Form.Label>Estudio Médico</Form.Label>
                <Form.Control className="w-auto" type="file" />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3 me-5">
                <Form.Label>Pagos</Form.Label>
                <Form.Control className="w-auto" type="file" />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3 me-5">
                <Form.Label>Autorización</Form.Label>
                <Form.Control className="w-auto" type="file" />
              </Form.Group>
            </div>
            <Button className="mb-2">Subir</Button>
            <h5>Pagos</h5>
            <div className="d-inline-flex w-100">
              <Table>
                <thead className="bg-gray">
                  <tr>
                    <th>Cuota</th>
                    <th>Fecha</th>
                    <th>Importe</th>
                    <th>Archivo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="w-auto">1</td>
                    <td className="w-auto">03-04-2022</td>
                    <td className="w-auto">1500</td>
                    <td className="w-auto">archivo.pdf</td>
                  </tr>
                  <tr>
                    <td className="w-auto">2</td>
                    <td className="w-auto">03-05-2022</td>
                    <td className="w-auto">1500</td>
                    <td className="w-auto">archivo.pdf</td>
                  </tr>
                  <tr>
                    <td className="w-auto">3</td>
                    <td className="w-auto">03-06-2022</td>
                    <td className="w-auto">1500</td>
                    <td className="w-auto">archivo.pdf</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

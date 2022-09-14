import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "react-bootstrap";

function ClubesCRUD() {
  const [data, setdata] = useState({clubes: [''], asociaciones: ['']});
  const [modalActualizar, setmodalActualizar] = useState({'abierto':false, 'club': 0});
  const [modalInsertar, setmodalInsertar] = useState(false);
  const [form, setform] = useState({id: 1, nombre:'', asociacion:'', nombrecorto:'', abreviatura:'', escudo:''});
  useEffect(() => {
    fetch("http://localhost:5000/club")
    .then((res) => res.json())
    .then((responseJson) => {
      setdata(responseJson);
      return responseJson;
    });
  }, []);

  const postdata = ()=>{
    fetch("http://localhost:5000/club", {
      method:'POST',
      headers:{'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
      body:data
    })
  }

  const mostrarModalActualizar = (club) => {
    console.log("mostrar actualizar");
    setmodalActualizar({'abierto': true, 'club': club});
  };

  const cerrarModalActualizar = () => {
    console.log("cerrar actualizar");
    setmodalActualizar({'abierto': false, 'club': modalActualizar.club});
  };

  const mostrarModalInsertar = () => {
    console.log("mostrar insertar");
    setmodalInsertar(true)
  };

  const cerrarModalInsertar = () => {
    console.log("cerrar insertar");
    setmodalInsertar(false);
  };

  const editar = (dato) => {
    console.log("editar");
    let contador = 0;
    let datos = data.clubes;
    datos.map((registro) => {
      if (dato.id == registro.id) {
        datos[contador].nombre = dato.nombre;
        datos[contador].asociacion = dato.asociacion;
      }
      contador++;
    });
    setdata({'asociaciones': data.asociaciones, 'clubes': datos});
    postdata();
    setmodalActualizar(false);
  };

  const eliminar = (dato) => {
    console.log("eliminar");
    let opcion = window.confirm(
      "Estás seguro que deseas eliminar el elemento " + dato.id
    );
    if (opcion == true) {
      let contador = 0;
      let arreglo = data.clubes;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      setdata({'asociaciones': data.asociaciones, 'clubes': arreglo});
      postdata();
      setmodalActualizar(false);
    }
  };

  const insertar = () => {
    console.log("insertar");
    console.log(form);
    let valorNuevo = form;
    valorNuevo.id = data.clubes.length + 1;
    let lista = data.clubes;
    lista.push(valorNuevo);
    setdata({'asociaciones': data.asociaciones, 'clubes': lista});
    postdata();
    setmodalInsertar(false);
  };

  const handleChange = (e) => {
    setform({...form, [e.target.name]: e.target.value});
  };

  return (
    <>

      <Container>
        <h2>Clubes</h2>
        <br />
        <Button color="success" onClick={() => mostrarModalInsertar()}>
          Crear
        </Button>
        <br />
        <br />
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Asociación</th>
              <th>Corto</th>
              <th>Abreviatura</th>
              <th>Escudo</th>
              <th>_</th>
            </tr>
          </thead>

          <tbody>
            {data.clubes.map((club) => (
              <tr key={club.id}>
                <td>{club.id}</td>
                <td>{club.nombre}</td>
                <td>{club.asociacion}</td>
                <td>{club.nombrecorto}</td>
                <td>{club.abreviatura}</td>
                <td>{club.escudo}</td>
                <td>
                  <Button
                    color="primary"
                    onClick={() => mostrarModalActualizar(club)}
                  >
                    Editar
                  </Button>{" "}
                  <Button color="danger" onClick={() => eliminar(club)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal show={modalActualizar.abierto}>
        <ModalHeader>
          <div>
            <h3>Editar Registro</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input
              className="form-control"
              readOnly
              type="text"
              value={modalActualizar.club.id}
            />
          </FormGroup>

          <FormGroup>
            <label>Nombre:</label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              onChange={handleChange}
              value={modalActualizar.club.nombre}
            />
          </FormGroup>

          <FormGroup>
            <label>Asociación:</label>
            <select
              className="form-control"
              name="asociacion"
              value={modalActualizar.club.asociacion}
              onChange={handleChange}
              style={{color: '#121212 !important', border: '1px solid #ced4da !important'}}
            >
              {data.asociaciones.map(asociacion => {
                return(
                  <option value={asociacion.id} key={asociacion.id}>{asociacion.nombre}</option>
                )
              })}
            </select>
            
          </FormGroup>

          <FormGroup>
            <label>Nombre corto:</label>
            <input
              className="form-control"
              name="nombrecorto"
              value={modalActualizar.club.nombrecorto}
              type="text"
              onChange={handleChange}
            >
            </input>
          </FormGroup>

          <FormGroup>
            <label>Abreviatura:</label>
            <input
              className="form-control"
              name="abreviatura"
              value={modalActualizar.club.abreviatura}
              type="text"
              onChange={handleChange}
            >
            </input>
          </FormGroup>

          <FormGroup>
            <label>Escudo:</label>
            <input
              className="form-control"
              name="escudo"
              value=''
              type="file"
              onChange={handleChange}
            >
            </input>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => editar(form)}>
            Editar
          </Button>
          <Button color="danger" onClick={() => cerrarModalActualizar()}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      <Modal show={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Nuevo Club</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input
              className="form-control"
              readOnly
              type="text"
              value={data.clubes.length + 1}
            />
          </FormGroup>

          <FormGroup>
            <label>Nombre:</label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Asociación:</label>
            <select
              className="form-control"
              name="asociacion"
              onSelect={handleChange}
              onChange={handleChange}
              defaultValue='Seleccionar'
            >
              <option>Seleccionar</option>
              {data.asociaciones.map(asociacion => {
                return(
                  <option value={data.asociaciones.find(a => a.id == asociacion.id).nombre} key={asociacion.id}>{asociacion.nombre}</option>
                )
              })}
            </select>
            
          </FormGroup>

          <FormGroup>
            <label>Nombre corto:</label>
            <input
              className="form-control"
              name="nombrecorto"
              type="text"
              onChange={handleChange}
            >
            </input>
          </FormGroup>

          <FormGroup>
            <label>Abreviatura:</label>
            <input
              className="form-control"
              name="abreviatura"
              type="text"
              onChange={handleChange}
            >
            </input>
          </FormGroup>

          <FormGroup>
            <label>Escudo:</label>
            <input
              className="form-control"
              name="escudo"
              type="file"
              onChange={handleChange}
            >
            </input>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => insertar()}>
            Insertar
          </Button>
          <Button
            className="btn btn-danger"
            onClick={() => cerrarModalInsertar()}
          >
            Cancelar
          </Button>
        </ModalFooter>
            </Modal>
    </>
  );
}
export default ClubesCRUD;

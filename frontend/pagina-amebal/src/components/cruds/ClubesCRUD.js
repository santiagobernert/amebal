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
  const [modalActualizar, setmodalActualizar] = useState(false);
  const [modalInsertar, setmodalInsertar] = useState(false);
  const [form, setform] = useState({id: 0, nombre:'', asociacion:''});
  useEffect(() => {
    fetch("http://localhost:5000/club")
    .then((res) => res.json())
    .then((responseJson) => {
      console.log(responseJson);
      setdata(responseJson);
      return responseJson;
    });
  }, []);

  const mostrarModalActualizar = () => {
    console.log("mostrar actualizar");
    setmodalActualizar(true);
  };

  const cerrarModalActualizar = () => {
    console.log("cerrar actualizar");
    setmodalActualizar(false);
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
      setmodalActualizar(false);
    }
  };

  const insertar = () => {
    console.log("insertar");
    let valorNuevo = form;
    valorNuevo.id = data.clubes.length + 1;
    let lista = data.clubes;
    lista.push(valorNuevo);
    setdata({'asociaciones': data.asociaciones, 'clubes': lista});
    setmodalInsertar(false);
  };

  const handleChange = (e) => {
    setform({...form, [e.target.name]: e.target.value});
  };

  return (
    <>
      {console.log("asociaciones", data.asociaciones)}
      {console.log("clubes", data.clubes)}

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
              <th>_</th>
            </tr>
          </thead>

          <tbody>
            {data.clubes.map((club) => (
              <tr key={club.id}>
                <td>{club.id}</td>
                <td>{club.nombre}</td>
                <td>{club.asociacion}</td>
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

      <Modal show={modalActualizar}>
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
              value={data.id}
            />
          </FormGroup>

          <FormGroup>
            <label>Nombre:</label>
            <input
              className="form-control"
              name="nombre"
              type="text"
              onChange={handleChange}
              value={data.nombre}
            />
          </FormGroup>

          <FormGroup>
            <label>Asociación:</label>
            <input
              className="form-control"
              name="asociacion"
              type="text"
              onChange={handleChange}
              value={data.asociacion}
            />
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
            <input
              className="form-control"
              name="asociacion"
              type="text"
              onChange={handleChange}
            />
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

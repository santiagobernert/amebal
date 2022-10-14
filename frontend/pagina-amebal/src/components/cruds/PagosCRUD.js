import React, { useEffect, useRef, useState } from "react";
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

function pagosCRUD() {
  const [data, setdata] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [modalActualizar, setmodalActualizar] = useState({
    abierto: false,
    pago: data.length,
  });
  const [modalInsertar, setmodalInsertar] = useState(false);
  const [form, setform] = useState({
    id: 1,
    usuario: 0,
    fecha: "",
    importe: "",
    banco: "",
  });
  const ref = useRef({
    id: useRef(0),
    usuario: useRef(0),
    fecha: useRef(""),
    importe: useRef(""),
    banco: useRef(""),
  });
  useEffect(() => {
    getData();
    getUsuarios();
  }, []);

  const getData = () => {
    fetch("http://localhost:5000/pago")
      .then((res) => res.json())
      .then((responseJson) => {
        setdata(responseJson);
        return responseJson;
      });
  };
  const getUsuarios = () => {
    fetch("http://localhost:5000/usuario")
      .then((res) => res.json())
      .then((responseJson) => {
        setUsuarios(responseJson.usuarios);
        return responseJson;
      });
  };

  const postData = () => {
    fetch("http://localhost:5000/pago", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .catch((error) => console.log("post", error));
  };

  const putData = () => {
    fetch("http://localhost:5000/pago", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };

  const deleteData = (id) => {
    fetch("http://localhost:5000/pago", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(id),
    })
      .then((response) => response.json())
      .catch((error) => console.log("delete", error));
  };

  const mostrarModalActualizar = (pago) => {
    console.log("mostrar actualizar");
    setmodalActualizar({ abierto: true, pago: pago });
  };

  const cerrarModalActualizar = () => {
    console.log("cerrar actualizar");
    setmodalActualizar({
      abierto: false,
      pago: modalActualizar.pago,
    });
  };

  const mostrarModalInsertar = () => {
    console.log("mostrar insertar");
    setmodalInsertar(true);
  };

  const cerrarModalInsertar = () => {
    console.log("cerrar insertar");
    setmodalInsertar(false);
  };

  const editar = (dato) => {
    console.log("editar");
    let contador = 0;
    let datos = data;
    datos.map((registro) => {
      if (dato.id == registro.id) {
        datos[contador].usuario = dato.usuario;
        datos[contador].fecha = dato.fecha;
        datos[contador].importe = dato.importe;
        datos[contador].banco = dato.banco;
      }
      contador++;
    });
    setdata(datos);
    putData();
    setmodalActualizar({
      abierto: false,
      pago: modalActualizar.pago,
    });
  };

  const eliminar = (dato) => {
    console.log("eliminar");
    let opcion = window.confirm(
      "Estás seguro que deseas eliminar el elemento " + dato.id
    );
    if (opcion == true) {
      let contador = 0;
      let arreglo = data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      setdata(arreglo);
      setmodalActualizar({
        abierto: false,
        pago: modalActualizar.pago,
      });
      deleteData(dato.id);
    }
  };

  const insertar = () => {
    console.log("insertar");
    console.log(form);
    let valorNuevo = form;
    valorNuevo.id = data.length + 1;
    let lista = data;
    lista.push(valorNuevo);
    setdata(lista);
    postData();
    setmodalInsertar(false);
  };

  const handleChangeEdit = (e) => {
    setform({
      id: ref.current["id"].current.value,
      usuario: ref.current["usuario"].current.value,
      fecha: ref.current["fecha"].current.value,
      importe: ref.current["importe"].current.value,
      banco: ref.current["banco"].current.value,
    });
  };

  const handleChangeInsert = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const search = (e) => {
    let searchData = [];
    if (e.target.value !== "") {
      data.map((pago) => {
        if (pago.usuario.toLowerCase().includes(e.target.value.toLowerCase())) {
          searchData.push(pago);
        }
      });
      setdata(searchData);
    } else {
      searchData = getData();
    }
    console.log(data);
  };

  return (
    <>
      <Container>
        <h2>Pagos</h2>
        <br />
        <input
          onChange={(e) => search(e)}
          placeholder="Buscar por usuario"
          type="text"
        />
        <Button
          ms="auto"
          color="success"
          onClick={() => mostrarModalInsertar()}
        >
          Crear
        </Button>
        <br />
        <br />
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuario</th>
              <th>Fecha</th>
              <th>Importe</th>
              <th>Banco</th>
              <th>_</th>
            </tr>
          </thead>

          <tbody>
            {data.map((pago) => (
              <tr key={pago.id}>
                <td>{pago.id}</td>
                <td>{usuarios.find((c) => c.id == pago.fecha).usuario}</td>
                <td>{pago.fecha}</td>
                <td>{pago.importe}</td>
                <td>{pago.banco}</td>
                <td>
                  <Button
                    color="primary"
                    onClick={() => mostrarModalActualizar(pago)}
                  >
                    Editar
                  </Button>{" "}
                  <Button color="danger" onClick={() => eliminar(pago)}>
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
              ref={ref.current.id}
              defaultValue={modalActualizar.pago.id}
            />
          </FormGroup>

          <FormGroup>
            <label>Usuario</label>
            <input
              onChange={handleChangeEdit}
              list="usuarios_list"
              type="search"
              className="form-control ds-input"
              name="usuario"
              ref={ref.current.usuario}
              defaultValue={modalActualizar.pago.usuario}
              placeholder="Buscar usuario..."
              aria-label="Search docs for..."
              autoComplete="off"
              data-bd-docs-version="5.1"
              spellCheck="false"
              role="combobox"
              aria-autocomplete="list"
              aria-expanded="false"
              aria-owns="algolia-autocomplete-listbox-0"
              dir="auto"
            ></input>
            <datalist id="usuarios_list">
              <option>Seleccionar</option>
              {usuarios.map((usuario) => {
                return (
                  <option
                    key={usuario.id}
                    value={usuario.id}
                    className="dropdown-item"
                  >
                    {usuario.usuario}
                  </option>
                );
              })}
            </datalist>
          </FormGroup>

          <FormGroup>
            <label>Fecha</label>
            <input
              onChange={handleChangeEdit}
              type="date"
              className="form-control ds-input"
              name="fecha"
              ref={ref.current.fecha}
              defaultValue={modalActualizar.pago.fecha}
            ></input>
          </FormGroup>

          <FormGroup>
            <label>Importe</label>
            <input
              className="form-control"
              name="importe"
              ref={ref.current.importe}
              defaultValue={modalActualizar.pago.importe}
              type="number"
              onChange={handleChangeEdit}
            ></input>
          </FormGroup>

          <FormGroup>
            <label>Banco:</label>
            <input
              className="form-control"
              name="banco"
              ref={ref.current.banco}
              defaultValue={modalActualizar.pago.banco}
              onChange={handleChangeEdit}
            ></input>
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
            <h3>Nueva pago</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Id:</label>

            <input
              className="form-control"
              readOnly
              type="text"
              value={data.length + 1}
            />
          </FormGroup>

          <FormGroup>
            <label>Usuario</label>
            <input
              onChange={handleChangeInsert}
              list="usuarios_list"
              type="search"
              className="form-control ds-input"
              name="usuario"
              ref={ref.current.usuario}
              defaultValue={modalActualizar.pago.usuario}
              placeholder="Buscar usuario..."
              aria-label="Search docs for..."
              autoComplete="off"
              data-bd-docs-version="5.1"
              spellCheck="false"
              role="combobox"
              aria-autocomplete="list"
              aria-expanded="false"
              aria-owns="algolia-autocomplete-listbox-0"
              dir="auto"
            ></input>
            <datalist id="usuarios_list">
              <option>Seleccionar</option>
              {usuarios.map((usuario) => {
                return (
                  <option
                    key={usuario.id}
                    value={usuario.id}
                    className="dropdown-item"
                  >
                    {usuario.usuario}
                  </option>
                );
              })}
            </datalist>
          </FormGroup>

          <FormGroup>
            <label>Fecha:</label>
            <input
              className="form-control"
              name="fecha"
              type="date"
              onChange={handleChangeInsert}
            />
          </FormGroup>

          <FormGroup>
            <label>Importe:</label>
            <input
              className="form-control"
              name="importe"
              type="text"
              onChange={handleChangeInsert}
            ></input>
          </FormGroup>

          <FormGroup>
            <label>Banco:</label>
            <select
              className="form-control"
              name="banco"
              onChange={handleChangeInsert}
            >
              <option value="" key="">
                Seleccionar
              </option>
              {fetch("http://localhost:5000/banco", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({ provincia: provincia }),
              })
                .then((res) => res.json())
                .then((responseJson) => {
                  setbancoes(responseJson.bancoes);
                })
                .then(
                  bancoes.map((banco) => {
                    return (
                      <option value={banco.usuario} key={banco.id}>
                        {banco.usuario}
                      </option>
                    );
                  })
                )}
            </select>
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
export default pagosCRUD;

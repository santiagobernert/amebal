{
  /*  import React from "react";
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

export default function PasesCRUD() {
    let state = {
    data: getIems(),
    modalActualizar: false,
    modalInsertar: false,
    form: {
        id: "",
        personaje: "",
        anime: "",
    },
    };

    const getUsers = async () => {
    const res = await fetch("http://localhost:5000/pases");
    const data = await res.json();
    setUsers(data);
    };

    const mostrarModalActualizar = (dato) => {
    setState({
        form: dato,
        modalActualizar: true,
    });
    };

    const cerrarModalActualizar = () => {
    setState({ modalActualizar: false });
    };

    const mostrarModalInsertar = () => {
    setState({
        modalInsertar: true,
    });
    };

    const cerrarModalInsertar = () => {
    setState({ modalInsertar: false });
    };

    const editar = (dato) => {
    let contador = 0;
    let data = state.data;
    data.map((registro) => {
        if (dato.id == registro.id) {
        data[contador].personaje = dato.personaje;
        data[contador].anime = dato.anime;
        }
        contador++;
    });
    setState({ data: data, modalActualizar: false });
    };

    const eliminar = (dato) => {
    let opcion = window.confirm(
        "Estás seguro que deseas eliminar el elemento " + dato.id
    );
    if (opcion == true) {
        let contador = 0;
        let arreglo = state.data;
        arreglo.map((registro) => {
        if (dato.id == registro.id) {
            arreglo.splice(contador, 1);
        }
        contador++;
        });
        setState({ data: arreglo, modalActualizar: false });
    }
    };

    const insertar = () => {
    let valorNuevo = { ...state.form };
    valorNuevo.id = state.data.length + 1;
    let lista = state.data;
    lista.push(valorNuevo);
    setState({ modalInsertar: false, data: lista });
    };

    const handleChange = (e) => {
    setState({
        form: {
        ...state.form,
        [e.target.name]: e.target.value,
        },
    });
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
                <th>_</th>
            </tr>
            </thead>

            <tbody>
            {state.data.map((dato) => (
                <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>{dato.nombre}</td>
                <td>{dato.asociacion}</td>
                <td>
                    <Button
                    color="primary"
                    onClick={() => mostrarModalActualizar(dato)}
                    >
                    Editar
                    </Button>{" "}
                    <Button color="danger" onClick={() => eliminar(dato)}>
                    Eliminar
                    </Button>
                </td>
                </tr>
            ))}
            </tbody>
        </Table>
        </Container>

        <Modal isOpen={state.modalActualizar}>
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
                value={state.form.id}
            />
            </FormGroup>

            <FormGroup>
            <label>Nombre:</label>
            <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={handleChange}
                value={state.form.nombre}
            />
            </FormGroup>

            <FormGroup>
            <label>Asociación:</label>
            <input
                className="form-control"
                name="asociacion"
                type="text"
                onChange={handleChange}
                value={state.form.asociacion}
            />
            </FormGroup>
        </ModalBody>

        <ModalFooter>
            <Button color="primary" onClick={() => editar(state.form)}>
            Editar
            </Button>
            <Button color="danger" onClick={() => cerrarModalActualizar()}>
            Cancelar
            </Button>
        </ModalFooter>
        </Modal>

        <Modal isOpen={state.modalInsertar}>
        <ModalHeader>
            <div>
            <h3>Insertar Personaje</h3>
            </div>
        </ModalHeader>

        <ModalBody>
            <FormGroup>
            <label>Id:</label>

            <input
                className="form-control"
                readOnly
                type="text"
                value={state.data.length + 1}
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
            <label>sociación:</label>
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
*/
}

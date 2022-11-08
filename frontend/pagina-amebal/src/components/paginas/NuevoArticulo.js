import React, { useState, useEffect, useRef } from "react";
import { useDropzone } from "react-dropzone";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";

export default function NuevoArticulo() {
  const [files, setFiles] = useState([]);
  const [etiquetas, setetiquetas] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const [articulo, setarticulo] = useState({titulo:'', portada:'', cuerpo:'', tags:'', fecha:''});
  
  const postData = () => {
    fetch("http://localhost:5000/articulo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(articulo),
    })
      .then((response) => response.json())
      .catch((error) => console.log("post", error));
  };

  const refEtiqueta = useRef('')

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} />
      </div>
    </div>
  ));

  const handleChangeInsert = (e) => {
    setarticulo({
      ...articulo,
      [e.target.name]: e.target.value,
      'tags': etiquetas.toString(),
      'fecha': new Date()
    });
    console.log(articulo);
  };

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);
  return (
    <div>
      <Container className="p-4 justify-content-center">
        <InputGroup className="d-flex flex-column">
          <FormControl
            className="mb-3 w-100 text-center"
            placeholder="Titulo de la noticia"
            name="titulo"
            type="text"
            onChange={handleChangeInsert}
          />

          <Row>
            <Col className="justify-content-center d-flex mb-3">
              <FormControl className="w-25" ref={refEtiqueta} type="text" name="etiqueta" placeholder="Nueva etiqueta" />
              <Button onClick={()=> {setetiquetas([...etiquetas, refEtiqueta.current.value])}}>+etiqueta</Button>
            </Col>
          </Row>
          
          <Row>
            
              {etiquetas && etiquetas.map((etiqueta)=>{
                return(
                  <Col>
                  <div className="bg-primary rounded vw-10 text-center text-light me-1">{etiqueta}</div>
                  </Col>
                )
              })}
          </Row>

          <input
            className="mb-3 w-100 outline-0 bg-primary"
            type="file"
            accept="image/*"
          />
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
          {/* <aside style={thumbsContainer}>{thumbs}</aside> */}

          <FormControl
            className="mb-3 w-100"
            placeholder="Cuerpo de la noticia"
            name="cuerpo"
            type="text"
            onChange={handleChangeInsert}
          />

          <Row>
            <Col className="justify-content-center d-flex mb-3">
              <Button>+párrafo</Button>
            </Col>
            <Col className="justify-content-center d-flex mb-3">
              <Button>+imagen</Button>
            </Col>
          </Row>

          <InputGroup.Text>Cargar desde Word</InputGroup.Text>
          <input className="mb-3" type="file" />
        </InputGroup>

        <Button onClick={() => postData()}>Subir</Button>
      </Container>
    </div>
  );
}
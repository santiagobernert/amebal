import React, { useState, useEffect } from "react";
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

  /*const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));*/

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
            placeholder="Titulo del artículo"
          />

          <Row>
            <Col className="justify-content-center d-flex mb-3">
              <Button>+etiqueta</Button>
            </Col>
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
      </Container>
    </div>
  );
}

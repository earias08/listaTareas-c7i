import React from "react";
import { Form, Button } from "react-bootstrap";
import ListaTarea from "./ListaTarea";

const FormularioTarea = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        {/* form.control es el input */}
          <Form.Control type="text" placeholder="Ingrese una tarea" />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea></ListaTarea>
    </div>
  );
};

export default FormularioTarea;

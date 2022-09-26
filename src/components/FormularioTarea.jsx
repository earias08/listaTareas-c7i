import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ListaTarea from "./ListaTarea";

const FormularioTarea = () => {
  // aqui va la logica
  const tareasLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || [];
  const [tarea, setTarea] = useState("");
  const [arregloTareas, setArregloTareas] = useState(tareasLocalStorage);

  //ciclo de vida del componente
  useEffect(()=>{
    localStorage.setItem('listaTareas', JSON.stringify(arregloTareas));
  },[arregloTareas])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("desde handleSubmit");
    setArregloTareas([...arregloTareas, tarea]);
    setTarea('');
  };

  const borrarTarea = (nombre) =>{
    let arregloModificado = arregloTareas.filter((item)=> item !== nombre);
    //actualizar el state
    setArregloTareas(arregloModificado);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          {/* form.control es el input */}
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea arregloTareas={arregloTareas} borrarTarea={borrarTarea}></ListaTarea>
    </div>
  );
};

export default FormularioTarea;

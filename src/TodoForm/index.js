import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const { toggleModal, setToggleModal, addTodo } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setToggleModal(false);
  }


  const onCancel = () => { setToggleModal(!toggleModal) }

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }


  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo ToDo</label>
      <textarea
        placeholder="Llorar hoy por la noche"
        value={newTodoValue}
        onChange={onChange}
        required
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >Cerrar
        </button>
        <button
          className="TodoForm-button TodoForm-button--add"
          type="submit"
        >Añadir
        </button>

      </div>
    </form>
  )
}

export { TodoForm };
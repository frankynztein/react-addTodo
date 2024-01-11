import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

// const styles = {
//   backgroundColor: "red",
// }

// function TodoCounter(props) {
function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <>
      {completedTodos === totalTodos ? <h2>¡Felicitaciones! <br />Has terminado todas tus tareas.</h2> : <h2>Has completado <strong>{completedTodos}</strong> de <strong>{totalTodos}</strong> TODO's</h2>}
    </>
  );
}
export { TodoCounter };
import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from "../Modal";
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from "../TodoForm";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    toggleModal,
    setToggleModal
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <div className='leftColumn'>
        <h1>Busca una tarea</h1>
        <TodoSearch
        />
        <CreateTodoButton />
        {toggleModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
      </div>
      <div className='rightColumn'>
        <TodoCounter />
        <TodoList>
          {loading && (
            <>
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
            </>
          )}
          {error && <TodosError />}
          {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
      </div>
    </React.Fragment>
  );
}

export { AppUI };
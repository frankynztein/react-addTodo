import React from 'react';
import fox from './fox.png';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
  const { toggleModal, setToggleModal } = React.useContext(TodoContext);
  return (
    <>
      <button
        className='New-Btn'
        onClick={
          () => { setToggleModal(!toggleModal) }
        }>
        New Task
      </button>
      <img src={fox} alt='Fox sleeping' className='fox' />
    </>
  );
}

export { CreateTodoButton };
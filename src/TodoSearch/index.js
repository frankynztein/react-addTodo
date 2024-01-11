import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const { searchValue, setSearchValue, } = React.useContext(TodoContext);

  return (
    <input
      placeholder="Lloradita del día"
      value={searchValue}
      onChange={(event) => { setSearchValue(event.target.value); }}></input>
  );
}
export { TodoSearch };
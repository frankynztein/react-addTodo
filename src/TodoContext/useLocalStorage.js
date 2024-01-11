import React from "react";

// Custom hook
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);

      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000)
  }, []);

  const saveItem = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems))
    setItem(newItems)
  }

  return {
    item,
    saveItem,
    loading,
    error
  };
}

export { useLocalStorage };

// Renderizar arrays
// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   {
//     text: "Cortar cebolla", completed: true, id: 1
//   },
//   {
//     text: "Jugar con Harry", completed: true, id: 2
//   },
//   {
//     text: "Aprender Angular", completed: false, id: 3
//   },
//   {
//     text: "Aprender React", completed: false, id: 4
//   },
//   {
//     text: "Pagar internet", completed: true, id: 5
//   },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

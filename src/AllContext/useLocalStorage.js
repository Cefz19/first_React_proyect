import React from "react";

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
    }, 2000);
  });



  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error
  };
}

export { useLocalStorage }

// localStorage.removeItem('ALL_V1');
// const defaultAll = [
//   { text: 'To cut onio', completed: true },
//   { text: 'To take the curse of introductory a React.js', completed: false },
//   { text: 'To cry with the Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'To use state derivatives', completed: true },
// ];

// localStorage.setItem('All_V1', JSON.stringify(defaultAll));


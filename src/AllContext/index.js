import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const AllContext = React.createContext();

function AllProvider({ children }) {
  const {
    item: all,
    saveItem: saveAll,
    loading,
    error,
  } = useLocalStorage('All_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedAll = all.filter(all => !!all.completed).length;
  const totalAll = all.length;



  const searchedAll = all.filter(
    (all) => {
      const allText = all.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();

      return allText.includes(searchText);
    }
  )
  const addAll = (text) => {
    const newAll = [...all];
    newAll.push({
      text,
      completed: false
    })
    saveAll(newAll);
  }

  const completeAll = (text) => {
    const newAll = [...all];
    const allIndex = newAll.findIndex(
      (all) => all.text === text
    );
    newAll[allIndex].completed = true;
    saveAll(newAll);
  }

  const deleteAll = (text) => {
    const newAll = [...all];
    const allIndex = newAll.findIndex(
      (all) => all.text === text
    );
    newAll.splice(allIndex, 1);
    saveAll(newAll);
  };
  return (
    <AllContext.Provider value={{
      loading,
      error,
      completedAll,
      totalAll,
      searchValue,
      setSearchValue,
      searchedAll,
      addAll,
      completeAll,
      deleteAll,
      openModal,
      setOpenModal,
    }}>
      {children}
    </AllContext.Provider>
  );
}

export { AllContext, AllProvider };
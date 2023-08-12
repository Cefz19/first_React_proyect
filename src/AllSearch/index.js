import React from 'react';
import './AllSearch.css';
import { AllContext } from '../AllContext';

function AllSearch() {
    const {
        searchValue,
        setSearchValue,  
      } = React.useContext(AllContext);

    return(
        <input placeholder="To cut onion" 
        className="AllSearch"
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);
        }}/>
    );
  }

  export { AllSearch };
  
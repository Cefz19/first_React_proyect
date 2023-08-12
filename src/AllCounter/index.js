import React from 'react';
import { AllContext } from '../AllContext';
import './AllCounter.css';

function AllCounter() {
  const {
    completedAll,
    totalAll,  
  } = React.useContext(AllContext);

  return (
    <h1 className="TodoCounter">
      You have completed <span>{completedAll}</span> de <span>{totalAll}</span> TODOs
    </h1>
  );
}

export { AllCounter };

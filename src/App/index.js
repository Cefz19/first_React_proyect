import React from 'react';
import { AppUI } from './AppUI';
import { AllProvider } from '../AllContext';



function App() {

  return (
    <AllProvider>
      <AppUI />
    </AllProvider>
  );
}

export default App;
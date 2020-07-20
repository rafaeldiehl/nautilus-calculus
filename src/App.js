import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/globals';

function App() {
  return(
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;

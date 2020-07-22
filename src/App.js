import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/globals';

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <GlobalStyle />
        <Routes />
      </HashRouter>
    </div>
  );
}

export default App;

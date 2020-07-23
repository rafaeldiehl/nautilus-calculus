import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/globals';

const App = () => (
  <div>
    <HashRouter basename="/">
      <GlobalStyle />
      <Routes />
    </HashRouter>
  </div>
);

export default App;

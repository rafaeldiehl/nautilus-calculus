import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import './assets/styles/main.scss';

const App = () => (
  <div>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </div>
);

export default App;

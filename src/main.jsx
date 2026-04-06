import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 

import Cabecalho from './componentes/cabecalho/index.jsx';
import Rodape from './componentes/rodape/index.jsx';

import './estilos/reset.css';
import './estilos/globals.css';

import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Cabecalho />
      <App />
      <Rodape />
    </BrowserRouter>
  </React.StrictMode>
);
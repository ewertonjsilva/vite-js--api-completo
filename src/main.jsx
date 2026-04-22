/**
 * @file   src\main.jsx
 * @author Ewerton
 * @date   2026-04-17
 * @desc   [Descrição do componente ou arquivo]
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '@fontsource/roboto'; // Peso 400

import { AuthProvider } from './context/AuthContext.jsx';
import Cabecalho from './componentes/cabecalho/index.jsx';
import Rodape from './componentes/rodape/index.jsx';

import './estilos/reset.css';
import './estilos/globals.css';

import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Cabecalho />
        <App />
        <Rodape />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
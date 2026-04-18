/**
 * @file   src\App.jsx
 * @author Ewerton
 * @date   2026-04-17
 * @desc   [Descrição do componente ou arquivo]
 */

import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import CadastrarCliente from './pages/usuarios/clientes/formulario';
import Login from './pages/login';
import Produtos from './pages/produtos';
import Produto from './pages/produtos/produto';
import GerProdutos from './pages/gerenciamento/produtos';
import GerIngredientes from './pages/gerenciamento/produtos/ingredientes';
import EdtUsuario from './pages/gerenciamento/usuarios';
import Mesas from './pages/gerenciamento/mesas'; 
import CompCarrinho from './pages/carrinho'; 
import HomeGerenciamento from './pages/gerenciamento';
import NotFound from './pages/notFound';


import Teste from './pages/teste';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<CadastrarCliente />} />
      <Route path="/produtos" element={<Produtos />} />
      {/* <Route path="/produto" element={<Produto />} /> */}
      <Route path="/produto/:id" element={<Produto />} />
      <Route path="/gerenciamento" element={<HomeGerenciamento />} />
      <Route path="/gerenciamento-produto" element={<GerProdutos />} />
      <Route path="/gerenciamento-ingredientes" element={<GerIngredientes />} />
      <Route path="/login" element={<Login />} />
      <Route path="/usuario-edt" element={<EdtUsuario />} />
      <Route path="/carrinho" element={<CompCarrinho />} />
      <Route path="/mesas" element={<Mesas />} />


      <Route path="/teste" element={<Teste />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App

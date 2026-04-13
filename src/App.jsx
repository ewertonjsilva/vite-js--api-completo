import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import CadastrarCliente from './pages/usuarios/clientes/formulario';
import Login from './pages/login';
import Produtos from './pages/produtos';
import NotFound from './pages/notFound';
import Teste from './pages/teste';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<CadastrarCliente />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/login" element={<Login />} />

      <Route path="/teste" element={<Teste />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App

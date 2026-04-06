import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import NotFound from './pages/notFound';
import Teste from './pages/teste';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="*" element={<NotFound />} />
      <Route path="/Teste" element={<Teste />} />
    </Routes>
  )
}

export default App

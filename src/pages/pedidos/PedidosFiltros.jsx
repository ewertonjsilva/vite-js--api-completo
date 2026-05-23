import { useState } from 'react';
import styles from './index.module.css';

export default function PedidosFiltros({ onChange }) {
  const [status, setStatus] = useState('');
  const [usuario, setUsuario] = useState('');

  function aplicar() {
    onChange && onChange({ status, usuario, page: 1, limit: 20 });
  }

  return (
    <div className={styles.filtros}>
      <div className={styles.filterGroup}>
        <label>Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Todos</option>
          <option value="1">Andamento</option>
          <option value="2">Finalizado</option>
          <option value="3">Cancelado</option>
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label>Usuário</label>
        <input value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder="ID do usuário" />
      </div>

      <button className={styles.buttonPrimary} onClick={aplicar}>Aplicar</button>
    </div>
  );
}

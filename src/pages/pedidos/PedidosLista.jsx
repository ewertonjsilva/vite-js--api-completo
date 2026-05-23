import styles from './index.module.css';

const STATUS_LABELS = {
  1: 'Andamento',
  2: 'Finalizado',
  3: 'Cancelado',
};

export default function PedidosLista({ pedidos = [], onSelect, onFinalizar, onCancelar }) {
  return (
    <div className={styles.tableWrap}>
      <div className={styles.tableHeader}>
        <span className={styles.tableCell}>ID</span>
        <span className={styles.tableCell}>Data</span>
        <span className={styles.tableCell}>Mesa</span>
        <span className={styles.tableCell}>Usuário</span>
        <span className={styles.tableCell}>Status</span>
        <span className={styles.tableCell}>Ações</span>
      </div>
      {pedidos.map((pedido) => (
        <div key={pedido.ped_id} className={styles.tableRow} onClick={() => onSelect && onSelect(pedido)}>
          <span className={styles.tableCell}>{pedido.ped_id}</span>
          <span className={styles.tableCell}>{pedido.ped_data ? new Date(pedido.ped_data).toLocaleString() : '-'}</span>
          <span className={styles.tableCell}>{pedido.mes_id || '-'}</span>
          <span className={styles.tableCell}>{pedido.usu_id || '-'}</span>
          <span className={styles.tableCell}>
            <span className={`${styles.statusBadge} ${pedido.ped_status === 1 ? styles.statusAndamento : pedido.ped_status === 2 ? styles.statusFinalizado : styles.statusCancelado}`}>
              {STATUS_LABELS[pedido.ped_status] || 'Desconhecido'}
            </span>
          </span>
          <span className={`${styles.tableCell} ${styles.actionGroup}`}>
            <button className={styles.buttonSecondary} onClick={(e) => { e.stopPropagation(); onFinalizar && onFinalizar(pedido.ped_id); }}>Finalizar</button>
            <button className={styles.buttonSecondary} onClick={(e) => { e.stopPropagation(); onCancelar && onCancelar(pedido.ped_id); }}>Cancelar</button>
          </span>
        </div>
      ))}
    </div>
  );
}


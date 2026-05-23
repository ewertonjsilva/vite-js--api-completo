import { useEffect, useState } from 'react';
import pedidosService from '../../services/pedidos';
import styles from './index.module.css';

const STATUS_LABELS = {
  1: 'Andamento',
  2: 'Finalizado',
  3: 'Cancelado',
};

export default function PedidoDetalhe({ pedido, onEditarQuantidade, onAdicionarProduto, onRemoverProduto }) {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    if (!pedido) return;
    carregarItens(pedido.ped_id);
  }, [pedido]);

  async function carregarItens(ped_id) {
    try {
      const res = await pedidosService.listarItens({ pedido: ped_id });
      if (res && res.dados) setItens(res.dados);
    } catch (err) {
      setItens([]);
    }
  }

  return (
    <div className={styles.detailCard}>
      <div className={styles.detailHeader}>
        <h2>Pedido {pedido.ped_id}</h2>
        <span className={`${styles.statusBadge} ${pedido.ped_status === 1 ? styles.statusAndamento : pedido.ped_status === 2 ? styles.statusFinalizado : styles.statusCancelado}`}>
          {STATUS_LABELS[pedido.ped_status] || 'Desconhecido'}
        </span>
      </div>

      <div className={styles.detailInfo}>
        <span><strong>Usuário:</strong> {pedido.usu_id || '-'}</span>
        <span><strong>Forma Pagamento:</strong> {pedido.ped_tp_pag ?? '-'}</span>
        <span><strong>Valor Pago:</strong> R$ {pedido.ped_vlr_pago?.toFixed?.(2) ?? '0.00'}</span>
      </div>

      <h3>Itens</h3>
      <ul className={styles.itensList}>
        {itens.map((item) => (
          <li key={item.ppd_id} className={styles.itemRow}>
            <div className={styles.itemRowContent}>
              <span><strong>Produto:</strong> {item.prd_id}</span>
              <span>Qtd: {item.ppd_qtd}</span>
              <span>Valor: R$ {item.ppd_valor}</span>
            </div>
            <div className={styles.itemActions}>
              <button onClick={() => onEditarQuantidade && onEditarQuantidade(pedido.ped_id, item.ppd_id, item.ppd_qtd + 1)}>+</button>
              <button onClick={() => onEditarQuantidade && onEditarQuantidade(pedido.ped_id, item.ppd_id, Math.max(1, item.ppd_qtd - 1))}>-</button>
              <button onClick={() => onRemoverProduto && onRemoverProduto(pedido.ped_id, item.ppd_id)}>Remover</button>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.adicionarRow}>
        <button className={styles.buttonPrimary} onClick={() => onAdicionarProduto && onAdicionarProduto(pedido.ped_id, { prd_id: 0, prd_valor: 0 }, 1)}>
          Adicionar item
        </button>
      </div>
    </div>
  );
}

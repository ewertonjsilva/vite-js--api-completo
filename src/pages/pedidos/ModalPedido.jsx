import { useState } from 'react';
import styles from './index.module.css';
import pedidosService from '../../services/pedidos';

export default function ModalPedido({ onClose, onSaved, usuario }) {
  const [loading, setLoading] = useState(false);

  async function criar() {
    setLoading(true);
    try {
      const payload = { data: new Date().toISOString(), usu_id: usuario?.usu_id || null };
      await pedidosService.cadastrarPedido(payload);
      onSaved && onSaved();
    } catch (err) {
      alert('Erro ao criar pedido.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modalTitle}>Novo Pedido</h2>
        <div className={styles.modalBody}>
          <div className={styles.modalField}>
            <label>Solicitante</label>
            <input type="text" value={usuario?.usu_id ?? ''} readOnly />
          </div>
          <div className={styles.modalField}>
            <label>Data</label>
            <input type="text" value={new Date().toLocaleString()} readOnly />
          </div>
        </div>
        <div className={styles.modalActions}>
          <button className={styles.buttonPrimary} onClick={criar} disabled={loading}>{loading ? 'Criando...' : 'Criar pedido'}</button>
          <button className={styles.buttonSecondary} onClick={onClose}>Fechar</button>
        </div>
      </div>
    </div>
  );
}

/*
    carrega lista de pedidos
    aplica filtros
    passa callbacks para lista e detalhe
    controla permissão por usuario.usu_tipo

    Permissões
    Garçom (usu_tipo === 6)
    criar pedido
    adicionar produto
    editar quantidade
    remover produto
    finalizar pedido em andamento
    cancelar pedido em andamento
    só para mesa ocupada ou reservada
    
    Caixa / Gerente / Cozinha
    visualizar pedidos
    finalizar/cancelar pedidos em andamento
    acessar histórico
    imprimir comanda/nota
    
    Cliente (usu_tipo === 2)
    visualizar pedidos próprios
    possivelmente cancelar pedidos em andamento
    ver histórico


    Regras
    const STATUS = { ANDAMENTO: 'ANDAMENTO', CANCELADO: 'CANCELADO', FINALIZADO: 'FINALIZADO' };

    const podeEditarPedido = (pedido, usuario) =>
    pedido.status === STATUS.ANDAMENTO && usuario.usu_tipo === 6;

    const podeFinalizar = (pedido, usuario) =>
    pedido.status === STATUS.ANDAMENTO && [0,1,4,5,6].includes(usuario.usu_tipo);

    const podeCriarPedido = (mesaStatus, usuario) =>
    usuario.usu_tipo === 6 && ['OCUPADA','RESERVADA'].includes(mesaStatus);
*/


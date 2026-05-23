import { useEffect, useState } from 'react';
import styles from './index.module.css';
import { useAuth } from '../../context/AuthContext';
import pedidosService from '../../services/pedidos';
import PedidosLista from './PedidosLista';
import PedidosFiltros from './PedidosFiltros';
import PedidoDetalhe from './PedidoDetalhe';
import ModalPedido from './ModalPedido';

const STATUS = { 1: 'ANDAMENTO', 2: 'FINALIZADO', 3: 'CANCELADO' };

export default function Pedidos() {
  const { usuario } = useAuth();
  const [pedidos, setPedidos] = useState([]);
  const [filtros, setFiltros] = useState({ page: 1, limit: 20 });
  const [selecionado, setSelecionado] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    carregarPedidos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtros]);

  async function carregarPedidos() {
    try {
      setLoading(true);
      const res = await pedidosService.listarPedidos(filtros);
      if (res && res.dados) setPedidos(res.dados);
    } catch (error) {
      alert('Erro ao carregar pedidos.');
    } finally {
      setLoading(false);
    }
  }

  function atualizarPedidoLocal(id, patch) {
    setPedidos(prev => prev.map(p => (p.ped_id === id ? { ...p, ...patch } : p)));
  }

  async function finalizarPedido(ped_id) {
    const pedido = pedidos.find(p => p.ped_id === ped_id);
    if (!pedido || pedido.ped_status !== 1) return alert('Só é possível finalizar pedidos em andamento.');
    try {
      await pedidosService.editarPedido(ped_id, { status: 2 });
      atualizarPedidoLocal(ped_id, { ped_status: 2 });
    } catch (err) {
      alert('Erro ao finalizar pedido.');
    }
  }

  async function cancelarPedido(ped_id) {
    const pedido = pedidos.find(p => p.ped_id === ped_id);
    if (!pedido || pedido.ped_status !== 1) return alert('Só é possível cancelar pedidos em andamento.');
    try {
      await pedidosService.editarPedido(ped_id, { status: 3 });
      atualizarPedidoLocal(ped_id, { ped_status: 3 });
    } catch (err) {
      alert('Erro ao cancelar pedido.');
    }
  }

  async function editarQuantidade(ped_id, itemId, novaQtd) {
    if (novaQtd < 1) return;
    try {
      await pedidosService.editarItem(itemId, { qtd: novaQtd });
      // refresh itens in detalhe
      if (selecionado && selecionado.ped_id === ped_id) {
        setSelecionado({ ...selecionado });
      }
    } catch (err) {
      alert('Erro ao editar quantidade.');
    }
  }

  async function adicionarProduto(ped_id, produto, quantidade) {
    try {
      await pedidosService.cadastrarItem({ hora: new Date().toISOString(), qtd: quantidade, valor: produto.prd_valor || 0, obs: null, ped_id, prd_id: produto.prd_id });
      carregarPedidos();
    } catch (err) {
      alert('Erro ao adicionar produto.');
    }
  }

  async function removerProduto(ped_id, itemId) {
    try {
      await pedidosService.apagarItem(itemId);
      carregarPedidos();
    } catch (err) {
      alert('Erro ao remover item.');
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Pedidos</h1>
        <div>
          <button className={styles.buttonPrimary} onClick={() => setShowModal(true)}>Novo pedido</button>
        </div>
      </header>

      <PedidosFiltros onChange={setFiltros} />

      <main className={styles.main}>
        <section className={styles.lista}>
          {loading ? <p>Carregando...</p> : (
            <PedidosLista
              pedidos={pedidos}
              onSelect={setSelecionado}
              onFinalizar={finalizarPedido}
              onCancelar={cancelarPedido}
            />
          )}
        </section>

        <aside className={styles.detalhe}>
          {selecionado ? (
            <PedidoDetalhe
              pedido={selecionado}
              onEditarQuantidade={editarQuantidade}
              onAdicionarProduto={adicionarProduto}
              onRemoverProduto={removerProduto}
            />
          ) : (
            <div className={styles.placeholder}>Selecione um pedido para ver detalhes</div>
          )}
        </aside>
      </main>

      {showModal && <ModalPedido onClose={() => setShowModal(false)} onSaved={() => { setShowModal(false); carregarPedidos(); }} usuario={usuario} />}
    </div>
  );
}

/*
-- usu_tipo: 0 - ADM, 1 - Restaurante, 2 - Cliente, 3 - Entregador, 4 - Cozinha, 5 - Caixa, 6 - Garçom
    Tela de pedidos, onde o garçom pode criar um novo pedido para uma mesa, adicionar 
    produtos ao pedido, editar a quantidade dos produtos no pedido, remover produtos do 
    pedido, finalizar o pedido e cancelar o pedido. O garçom só pode criar um pedido para 
    uma mesa que esteja ocupada ou reservada, não pode criar um pedido para uma mesa que 
    esteja livre ou inativa. O garçom só pode finalizar um pedido que esteja em andamento, 
    não pode finalizar um pedido que esteja cancelado ou já finalizado. O garçom só pode 
    cancelar um pedido que esteja em andamento, não pode cancelar um pedido que esteja cancelado 
    ou já finalizado. O garçom só pode editar um pedido que esteja em andamento, não pode 
    editar um pedido que esteja cancelado ou já finalizado. O garçom só pode adicionar 
    produtos a um pedido que esteja em andamento, não pode adicionar produtos a um pedido 
    que esteja cancelado ou já finalizado. O garçom só pode remover produtos de um pedido 
    que esteja em andamento, não pode remover produtos de um pedido que esteja cancelado 
    ou já finalizado.
    Tela pedidos, onde o caixa pode visualizar os pedidos em andamento, finalizar um pedido, 
    cancelar um pedido, visualizar os detalhes de um pedido, imprimir a comanda de um pedido, 
    imprimir a nota fiscal de um pedido, visualizar o histórico de pedidos, filtrar os pedidos 
    por data, filtrar os pedidos por status, filtrar os pedidos por mesa, filtrar os pedidos 
    por garçom, filtrar os pedidos por valor, filtrar os pedidos por produto, filtrar os pedidos 
    por categoria de produto, filtrar os pedidos por forma de pagamento, filtrar os pedidos por 
    tipo de pagamento, filtrar os pedidos por cliente, filtrar os pedidos por usuário, filtrar os 
    pedidos por horário, filtrar os pedidos por dia da semana, filtrar os pedidos por mês, filtrar 
    os pedidos por ano.
    Tela de pedidos, onde o gerente pode visualizar os pedidos em andamento, finalizar um pedido, 
    cancelar um pedido, visualizar os detalhes de um pedido, imprimir a comanda de um pedido, imprimir 
    a nota fiscal de um pedido, visualizar o histórico de pedidos, filtrar os pedidos por data, filtrar 
    os pedidos por status, filtrar os pedidos por mesa, filtrar os pedidos por garçom, filtrar os pedidos 
    por valor, filtrar os pedidos por produto, filtrar os pedidos por categoria de produto, filtrar os 
    pedidos por forma de pagamento, filtrar os pedidos por tipo de pagamento, filtrar os pedidos por 
    cliente, filtrar os pedidos por usuário, filtrar os pedidos por horário, filtrar os pedidos por dia 
    da semana, filtrar os pedidos por mês, filtrar os pedidos por ano.
    Tela pedidos onde a cozinha pode visualizar os pedidos em andamento, finalizar um pedido, cancelar 
    um pedido, visualizar os detalhes de um pedido, imprimir a comanda de um pedido, imprimir a nota fiscal 
    de um pedido, visualizar o histórico de pedidos, filtrar os pedidos por data, filtrar os pedidos por 
    status, filtrar os pedidos por mesa, filtrar os pedidos por garçom, filtrar os pedidos por valor, filtrar 
    os pedidos por produto, filtrar os pedidos por categoria de produto, filtrar os pedidos por forma de 
    pagamento, filtrar os pedidos por tipo de pagamento, filtrar os pedidos por cliente, filtrar os pedidos 
    por usuário, filtrar os pedidos por horário, filtrar os pedidos por dia da semana, filtrar os pedidos 
    por mês, filtrar os pedidos por ano.
    Tela pedidos onde o cliente pode visualizar os pedidos em andamento, finalizar um pedido, cancelar um 
    pedido, visualizar os detalhes de um pedido, imprimir a comanda de um pedido, imprimir a nota fiscal de 
    um pedido, visualizar o histórico de pedidos, filtrar os pedidos por data, filtrar os pedidos por status, 
    filtrar os pedidos por mesa, filtrar os pedidos por garçom, filtrar os pedidos por valor, filtrar os pedidos 
    por produto, filtrar os pedidos por categoria de produto, filtrar os pedidos por forma de pagamento, filtrar 
    os pedidos por tipo de pagamento, filtrar os pedidos por cliente, filtrar os pedidos por usuário, filtrar 
    os pedidos por horário, filtrar os pedidos por dia da semana, filtrar os pedidos por mês, filtrar os pedidos por ano.
*/

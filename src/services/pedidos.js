import api from './apis';

const ENDPOINT = '/pedidos';
const ENDPOINT_ITENS = '/pedido-produtos';

export async function listarPedidos(params) {
  const response = await api.get(ENDPOINT, { params });
  return response.data;
}

export async function cadastrarPedido(payload) {
  const response = await api.post(ENDPOINT, payload);
  return response.data;
}

export async function editarPedido(id, payload) {
  const response = await api.patch(`${ENDPOINT}/${id}`, payload);
  return response.data;
}

export async function apagarPedido(id) {
  const response = await api.delete(`${ENDPOINT}/${id}`);
  return response.data;
}

export async function listarItens(p) {
  const response = await api.get(ENDPOINT_ITENS, { params: p });
  return response.data;
}

export async function cadastrarItem(payload) {
  const response = await api.post(ENDPOINT_ITENS, payload);
  return response.data;
}

export async function editarItem(id, payload) {
  const response = await api.patch(`${ENDPOINT_ITENS}/${id}`, payload);
  return response.data;
}

export async function apagarItem(id) {
  const response = await api.delete(`${ENDPOINT_ITENS}/${id}`);
  return response.data;
}

export default {
  listarPedidos,
  cadastrarPedido,
  editarPedido,
  apagarPedido,
  listarItens,
  cadastrarItem,
  editarItem,
  apagarItem,
};

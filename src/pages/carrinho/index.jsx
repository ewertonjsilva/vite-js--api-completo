import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increaseQuantity, decreaseQuantity, removeFromCart } from '@/services/redux/store/cartSlice';

// import Image from 'next/image';
import { RiDeleteBin6Line, RiAddLine, RiSubtractLine, RiChat1Line } from "react-icons/ri";

import styles from './index.module.css';

import { carrinho } from '../teste/mockup';

function CompCarrinho() {

    // const produtosCarrinho = useSelector(state => state.cart.items);    
    // const dispatch = useDispatch();

    console.log(carrinho);

    // Adicionar um campo temporário de id único aos produtos
    const inicializaCarrinhoComIds = carrinho.map((produto, index) => ({
      ...produto,
      temp_id: `${produto.id}-${index}-${new Date().getTime()}`
    }));

    const [produtosCarrinho, setProdutosCarrinho] = useState(inicializaCarrinhoComIds);
    const [modalAberto, setModalAberto] = useState(false);
    const [observacao, setObservacao] = useState("");
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);

    // useEffect(() => {
    //     // console.log('Renderiza');
    // }, [produtosCarrinho]);

    const abrirModal = (produto) => {
        setObservacao(produto.observacao || "");
        setProdutoSelecionado(produto);
        setModalAberto(true);
    };

    const fecharModal = () => setModalAberto(false);

    // const salvarObservacao = () => {
    //     setProdutosCarrinho(produtosCarrinho.map((produto) =>
    //         produto.temp_id === produtoSelecionado.temp_id
    //             ? { ...produto, observacao: observacao }
    //             : produto
    //     ));
    //     fecharModal();
    // };

    const aumentarQuantidade = (produto) => {
        setProdutosCarrinho(produtosCarrinho.map((p) =>
            p.temp_id === produto.temp_id
                ? { ...p, quantidade: p.quantidade + 1 }
                : p
        ));
    };

    const diminuirQuantidade = (produto) => {
        setProdutosCarrinho(produtosCarrinho.map((p) =>
            p.temp_id === produto.temp_id && p.quantidade > 1
                ? { ...p, quantidade: p.quantidade - 1 }
                : p
        ));
    };

    const excluirProduto = (produto) => {
        dispatch(removeFromCart(produto));
    };

    const valorTotal = produtosCarrinho.reduce((total, produto) => {
        const valor = parseFloat(produto.valor.replace('$', '').replace(',', '.'));
        return total + produto.quantidade * valor;
    }, 0);

    return (
        <div className={styles.centraliza}>
            <div className={styles.grid}>
                <div className={styles.carrTitulo}>Produto</div>
                <div className={styles.carrTitulo}>Quantidade</div>
                <div className={styles.carrTitulo}>Valor</div>
                <div className={styles.carrTitulo}>Total</div>
            </div>

            {
                produtosCarrinho.map((itemCarrinho) => (
                    <Grid
                        key={itemCarrinho.temp_id}
                        item={itemCarrinho}
                        abrirModal={abrirModal}
                        aumentarQuantidade={aumentarQuantidade}
                        diminuirQuantidade={diminuirQuantidade}
                        excluirProduto={excluirProduto}
                    />
                ))
            }

            <div className={styles.gridTotal}>
                <div></div>
                <div className={styles.total}>R$ {valorTotal.toFixed(2)}</div>
            </div>

            {modalAberto && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <textarea
                            value={observacao}
                            onChange={(e) => setObservacao(e.target.value)}
                            placeholder="Digite a observação..."
                        />
                        <div className={styles.conteinerBotaoModal}>
                            <button onClick={salvarObservacao}>Salvar</button>
                            <button onClick={fecharModal}>Fechar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CompCarrinho;

function Grid({ item, abrirModal, aumentarQuantidade, diminuirQuantidade, excluirProduto }) {

    const total = parseFloat(item.valor.replace('$', '').replace(',', '.')) * item.quantidade;

    // const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    // const apiPorta = process.env.NEXT_PUBLIC_API_PORTA;

    const imageLoader = ({ src, width, quality }) => {
        return `${apiUrl}:${apiPorta}${src}?w=${width}&q=${quality || 75}`
    }

    return (
        <div className={styles.grid}>
            <div>
                <div className={styles.ladoExcluir}>
                    <div className={styles.containerNomeObservaoes}>
                        <div className={styles.carrProduto}>
                            <div className={styles.contImgCarrProd}>
                                <img
                                    src={item.imagem}
                                    alt={item.nome}
                                    className={styles.imagemProduto}
                                />
                            </div>
                            <span>{item.nome}</span>
                        </div>

                        <div className={styles.observacao}>
                            <RiChat1Line className={styles.iconChat} onClick={() => abrirModal(item)} />
                            {item.observacao.length > 0 ? (
                                <textarea
                                    className={styles.textareaCarrinho}
                                    value={item.observacao} // O valor agora é gerenciado via "value"
                                    readOnly
                                    onClick={() => abrirModal(item)}
                                />
                            ) : (
                                <span className={styles.spanBtn} onClick={() => abrirModal(item)}>Adicionar observação</span>
                            )}
                        </div>
                    </div>
                    <RiDeleteBin6Line className={styles.iconActions} onClick={() => excluirProduto(item.id)} />
                </div>
            </div>

            <div className={`${styles.carrProduto} ${styles.carrQtd}`}>
                <RiSubtractLine className={styles.iconActions} onClick={() => diminuirQuantidade(item)} />
                {item.quantidade}
                <RiAddLine className={styles.iconActions} onClick={() => aumentarQuantidade(item)} />
            </div>
            <div className={`${styles.carrProduto} ${styles.valores}`}>{item.valor}</div>
            <div className={`${styles.carrProduto} ${styles.valores}`}>{total.toFixed(2)}</div>
        </div>
    );
}
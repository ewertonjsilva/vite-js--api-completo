import { useState } from 'react';

import { MdAttachMoney, MdBlock, MdCheck, MdEdit, MdDelete } from 'react-icons/md';

import styles from './index.module.css';

import ModalProdutos from './modalProdutos';

import img1 from '../../../imagens/temp/hamburger-bacon.jpg';
import img1d from '../../../imagens/temp/slider/promoGenerica.png';
import img2 from '../../../imagens/temp/sucoLaranja.jpg';
import img2d from '../../../imagens/temp/slider/promoLanchePeixe.png';
import img3 from '../../../imagens/temp/sorvete.jpeg';
import img3d from '../../../imagens/temp/slider/promoGenerica.png';

const produtosMock = [
    {
        prd_id: 1,
        prd_nome: 'Produto 1',
        prd_valor: 19.99,
        prd_disponivel: true,
        prd_destaque: true,
        prd_img: img1,
        prd_img_destaque: img1d,
        prd_descricao: 'Descrição do Produto 1',
        ptp_id: 1,
        prd_unidade: "un."
    },
    {
        prd_id: 2,
        prd_nome: 'Produto 2',
        prd_valor: 9.99,
        prd_disponivel: true,
        prd_destaque: false,
        prd_img: img2,
        prd_img_destaque: img2d,
        prd_descricao: 'Descrição do Produto 2',
        ptp_id: 2,
        prd_unidade: "un."
    },
    {
        prd_id: 3,
        prd_nome: 'Produto 3',
        prd_valor: 9.99,
        prd_disponivel: false,
        prd_destaque: false,
        prd_img: img3,
        prd_img_destaque: img3d,
        prd_descricao: 'Descrição do Produto 3',
        ptp_id: 2,
        prd_unidade: "un."
    },
    // Adicione mais produtos para teste
];

export default function GerProdutos() {
    const [produtos, setProdutos] = useState(produtosMock);
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [filterType, setFilterType] = useState('nome');
    const [searchTerm, setSearchTerm] = useState('');
    const [titulo, setTitulo] = useState('');

    const handleEditClick = (produto = null) => {
        // console.log(produto);
        produto ? setTitulo('Editar produto') : setTitulo('Adicionar produto');
        setProdutoSelecionado(produto);
        setShowModal(true);
    };

    const handleDeleteClick = (prd_id) => {
        const novosProdutos = produtos.filter((produto) => produto.prd_id !== prd_id);
        setProdutos(novosProdutos);
    };

    const handleToggleDisponibilidade = (prd_id) => {
        const novosProdutos = produtos.map((produto) =>
            produto.prd_id === prd_id ? { ...produto, prd_disponivel: !produto.prd_disponivel } : produto
        );
        setProdutos(novosProdutos);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setProdutoSelecionado(null);
    };

    return (
        <div className={styles.container}>
            <h1>Lista de Produtos</h1>
            <div className={styles.header}>
                <div className={styles.search}>
                    <input
                        type="text"
                        placeholder={`Pesquisar por ${filterType}`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                        <option value="usu_nome">Nome</option>
                        <option value="usu_email">Em destaque</option>
                        <option value="usu_email">Disponíveis</option>
                        <option value="usu_email">Indisponíveis</option>
                    </select>
                </div>
                <button className={styles.addButton} onClick={() => handleEditClick()}>
                    Adicionar Novo Produto
                </button>
            </div>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Imagem</th>
                        <th>Valor</th>
                        <th>Destaque</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr key={produto.prd_id}>
                            <td>{produto.prd_nome}</td>
                            <td>
                                <img src={produto.prd_img} alt={produto.prd_nome} className={styles.produtoImg} />
                            </td>
                            <td>R$ {produto.prd_valor.toFixed(2)}</td>
                            <td>
                                {produto.prd_destaque ? (
                                    <MdAttachMoney className={styles.destaqueImg} color='green' />
                                ) : (
                                    <MdAttachMoney className={styles.destaqueImg} />
                                )}
                            </td>
                            <td className={styles.acoes}>
                                <MdEdit
                                    onClick={() => handleEditClick(produto)}
                                    className={styles.destaqueImg}
                                />
                                {
                                    produto.prd_disponivel ?
                                        <MdCheck
                                            onClick={() => handleToggleDisponibilidade(produto.prd_id)}
                                            className={styles.destaqueImg}
                                            color='green'
                                        />
                                        :
                                        <MdBlock
                                            onClick={() => handleToggleDisponibilidade(produto.prd_id)}
                                            className={styles.destaqueImg}
                                        />
                                }
                                <MdDelete
                                    onClick={() => handleDeleteClick(produto.prd_id)}
                                    className={styles.destaqueImg}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showModal && (
                <ModalProdutos produto={produtoSelecionado} onClose={handleModalClose} titulo={titulo} />
            )}
        </div>
    );
}
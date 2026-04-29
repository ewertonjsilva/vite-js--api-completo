import { useState, useEffect } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

import ModalIngredientes from './modalIngredientes';
import api from '../../../../services/apis';

import styles from './index.module.css';

// import { ingredientesMock } from '../../../teste/mockup';

export default function GerIngredientes() {
    const [ingredientes, setIngredientes] = useState([]);
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [titulo, setTitulo] = useState('');

    // Função assíncrona para buscar os dados
    const fetchDados = async () => {
        try {
            setLoading(true);
            // O await pausa a execução até a resposta chegar
            const response = await api.get(`/ingredientes?nome=${searchTerm}`);
            setIngredientes(response.data.dados);
        } catch (err) {
            // O Axios coloca o erro detalhado em err.response
            console.error("Erro na requisição:", err.message);
            setErro("Não foi possível carregar os dados.");
        } finally {
            // Executa independente de ter dado erro ou sucesso
            setLoading(false);
        }
    };

    // useEffect(() => {
    //     fetchDados();
    // }, []);

    useEffect(() => {
        // Debounce simples para busca não disparar a cada tecla
        const delayDebounceFn = setTimeout(() => {
            fetchDados();
        }, 500);
        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]);

    const handleDeleteClick = async (id) => {
        if (window.confirm("Tem certeza que deseja excluir este ingrediente?")) {
            try {
                // No seu controller, você espera o ID no body (request.body)
                await api.delete('/ingredientes', { data: { id } });

                // Atualiza o estado local para remover o item da lista imediatamente
                setIngredientes(prev => prev.filter(ing => ing.id !== id));
                alert("Excluído com sucesso!");
            } catch (err) {
                console.error(err);
                alert("Erro ao excluir ingrediente.");
            }
        }
    };

    const handleEditClick = (ingrediente = null) => {
        ingrediente ? setTitulo('Editar ingrediente') : setTitulo('Adicionar ingrediente');
        setIngredienteSelecionado(ingrediente);
        setShowModal(true);
    };

    const handleModalClose = (atualizar = false) => {
        setShowModal(false);
        setIngredienteSelecionado(null);
        if (atualizar === true) fetchDados();
    };

    if (loading && ingredientes.length === 0) return <p>Carregando dados...</p>;
    if (erro) return <p style={{ color: 'red' }}>{erro}</p>;

    return (
        <div className={styles.container}>
            <h1>Lista de Ingredientes</h1>
            <div className={styles.header}>
                <div className={styles.search}>
                    <input
                        type="text"
                        placeholder="Pesquisar por nome..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button className={styles.addButton} onClick={() => handleEditClick()}>
                    Adicionar Novo Ingrediente
                </button>
            </div>

            {loading ? <p>Carregando...</p> : (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor adicional</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ingredientes.map((ingrediente) => (
                            <tr key={ingrediente.id}>
                                <td>
                                    <img src={ingrediente.img} alt={ingrediente.nome} className={styles.ingredienteImg} />
                                    {ingrediente.nome}
                                </td>

                                <td>R$ {ingrediente.custo_adicional}</td>
                                <td className={styles.acoes}>
                                    <MdEdit
                                        onClick={() => handleEditClick(ingrediente)}
                                        className={styles.destaqueImg}
                                    />
                                    <MdDelete
                                        onClick={() => handleDeleteClick(ingrediente.id)}
                                        className={styles.destaqueImg}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {showModal && (
                <ModalIngredientes produto={produtoSelecionado} onClose={handleModalClose} titulo={titulo} />
            )}
        </div>
    );
} 
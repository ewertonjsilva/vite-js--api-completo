import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
// import { useSelector, useDispatch } from "react-redux";
// import { addToCart } from '@/services/redux/store/cartSlice';

import carr from '../../../imagens/icones/carrinho.svg';
// import api from '@/services/api';

import styles from './index.module.css';

import { produtos} from '../../teste/mockup';

function Produto({ idProduto }) {

    // const [produto, setProduto] = useState({
    //     "id": "",
    //     "nome": "",
    //     "valor": "",
    //     "unidade": "",
    //     "icone": "",
    //     "imgProduto": "",
    //     "descricao": ""
    // });
    const [produto, setProduto] = useState(produtos[0]);
    const [qtd, setQtd] = useState(1);
    const [total, setTotal] = useState(0);

    // const dispatch = useDispatch();  // Utiliza o dispatch do Redux

    let navigate = useNavigate();
    // const user = JSON.parse(localStorage.getItem('user'));

    // const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    // const apiPorta = process.env.NEXT_PUBLIC_API_PORTA;

    // const imageLoader = ({ src, width, quality }) => {
    //     // console.log(`${apiUrl}:${apiPorta}${src}?w=${width}&q=${quality || 75}`);
    //     return `${apiUrl}:${apiPorta}${src}?w=${width}&q=${quality || 75}`
    // }

    // useEffect(() => {

    //     handleCarregaProduto();
    //     setTotal(produto.valor);

    //     async function handleCarregaProduto() {
    //         const dadosApi = {
    //             id: idProduto
    //         }
    //         try {
    //             const response = await api.post('/listaprodutos', dadosApi);
    //             const confirmaAcesso = response.data.sucesso;
    //             if (confirmaAcesso) {
    //                 const produtoApi = response.data.dados[0];
    //                 if (response.data.dados.length > 0) {
    //                     setProduto(produtoApi);
    //                 }
    //             }
    //         } catch (error) {
    //             if (error.response) {
    //                 alert(error.response.data.mensagem + '\n' + error.response.data.dados);
    //             } else {
    //                 alert('Erro no front-end' + '\n' + error);
    //             }
    //         }
    //     }
    // }, []);

    function handleAtlQtdVlr(nvVlr) {
        let totalTemp = 0;
        totalTemp = Number(nvVlr) * produto.valor;
        setQtd(Number(nvVlr));
        setTotal(totalTemp.toFixed(2));
    }

    // function handleAddItemCarrinho() {
    //     if (user) {

    //         const item = {
    //             id: produto.id,
    //             nome: produto.nome,
    //             valor: produto.valor,
    //             imgProduto: produto.imgProduto,
    //             ppd_qtd: qtd,
    //             ppd_obs: ''
    //         };
    //         dispatch(addToCart(item));  // Adiciona o item ao carrinho global

    //         navigate('/carrinho');
    //     } else {
    //         navigate('/usuarios/login');
    //     }
    // }

    return (
        <div className={styles.container}>
            {
                produto.id !== '' ?
                    <>
                        <div className={styles.containerItem}>
                            <img
                                className={styles.imagemProd}
                                src={produto.imgProduto}
                                alt={"Imagem " + produto.nome}
                            />
                        </div>
                        <div className={styles.containerItem}>
                            <div className={styles.titulo}>
                                <h1>{produto.nome}</h1>
                                <img
                                    className={styles.icon}
                                    src={produto.icone}
                                    alt={produto.icone}
                                />
                            </div>
                            <span className={styles.descricao}>{produto.descricao}</span>
                            <span className={styles.valor}>{'R$ ' + produto.valor}</span>
                            <div className={styles.comprar}>
                                <span className={styles.spanQtd}>Quantidade</span>
                                <input
                                    type="number"
                                    className={styles.input}
                                    min={1}
                                    onChange={nvVlr => handleAtlQtdVlr(nvVlr.target.value)}
                                    value={qtd}
                                />
                                <span className={styles.spanTt}>Total R$ {total}</span>
                                <button className={styles.button} onClick={() => handleAddItemCarrinho()}>
                                    <p className={styles.lblComp}>Inserir no carrinho</p>
                                    <img className={styles.imgBtn} src={carr} alt="adicionar" />
                                </button>
                            </div>
                        </div>
                    </>
                    :
                    <h1>Não há resultados para a requisição</h1>
            }
        </div>
    );
}

export default Produto;
/**
 * @file   src\pages\teste\index.jsx
 * @author Ewerton
 * @date   2026-04-23
 * @desc   [Descrição do componente ou arquivo]
 */

import { Link } from "react-router";

import styles from './index.module.css';

export default function Teste() {
    return (
        <div className={styles.container}>
            <h1>Teste</h1>
            <Link to="/login">
                Login
            </Link>
            <Link to="/cadastro">
                Cadastro de cliente
            </Link>
            <Link to="/usuario-edt">
                Editar usuário
            </Link>
            <Link to="/produtos">
                Produtos
            </Link>
            <Link to="/produto">
                Produto
            </Link>
            <Link to="/gerenciamento-produto">
                Gerenciamento de produtos
            </Link>
            <Link to="/gerenciamento-ingredientes">
                Gerenciamento de ingredientes
            </Link>
            <Link to="/mesas">
                Mesas
            </Link>
            <Link to="/carrinho">
                Carrinho
            </Link>
            <Link to="/gerenciamento">
                Gerenciamento
            </Link>
        </div>
    );
}
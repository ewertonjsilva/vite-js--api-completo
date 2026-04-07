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
            <Link to="/produtos">
                Produtos
            </Link>
        </div>
    );
}
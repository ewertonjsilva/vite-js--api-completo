/**
 * @file   src\componentes\menuGerenciamento\index.jsx
 * @author Ewerton
 * @date   2026-04-17
 * @desc   Menu lateral de gerenciamento utilizando React Router
 */

import { Link, useLocation } from 'react-router-dom'; // Alterado para react-router-dom
import styles from './index.module.css';

export default function MenuGerenciamento() {
    // No React Router, usamos o useLocation para obter a rota atual
    const location = useLocation();
    const rotaAtual = location.pathname;

    return (
        <div className={styles.containerMenuGerenciamento}>
            <Link
                to='/gerenciamento/produtos' // No React Router usa-se 'to' em vez de 'href'
                className={rotaAtual === '/gerenciamento/produtos' ? styles.active : styles.link}
            >
                Produtos Venda
            </Link>
            
            <Link
                to='/gerenciamento/mesas'
                className={rotaAtual === '/gerenciamento/mesas' ? styles.active : styles.link}
            >
                Mesas
            </Link>
            
            <Link
                to='/gerenciamento/usuarios' // Ajustado para bater com seu mockup de usuários
                className={rotaAtual === '/gerenciamento/usuarios' ? styles.active : styles.link}
            >
                Funcionários
            </Link>            
            
            <Link
                to='/gerenciamento/ingredientes'
                className={rotaAtual === '/gerenciamento/ingredientes' ? styles.active : styles.link}
            >
                Ingredientes
            </Link>
        </div>
    );
}
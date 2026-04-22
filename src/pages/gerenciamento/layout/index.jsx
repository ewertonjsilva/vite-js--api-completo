/**
 * @file   src\pages\gerenciamento\index.jsx
 * @author Ewerton
 * @date   2026-04-22
 * @desc   [Descrição do componente ou arquivo]
 */

import { Outlet, Navigate } from 'react-router-dom';
import MenuGerenciamento from '../../../componentes/menuGerenciamento';
import { useAuth } from '../../../context/AuthContext';
import styles from './index.module.css';

export default function LayoutGerenciamento() {
    const { usuario } = useAuth();

    // Proteção de rota: se não for tipo 1 ou 2, manda pra home
    if (!usuario || (usuario.tipo !== 1 && usuario.tipo !== 2)) {
        return <Navigate to="/" />;
    }

    return (
        <div className={styles.containerGerenciamento}>
            <aside className={styles.sidebar}>
                <MenuGerenciamento />
            </aside>
            <main className={styles.conteudo}>
                <Outlet /> {/* Aqui carregam as telas de produtos, mesas, etc */}
            </main>
        </div>
    );
}
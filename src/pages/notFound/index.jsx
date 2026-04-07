// src/pages/NotFound.jsx

import styles from './index.module.css';

const NotFound = () => {
    return (
        <div className={styles.container}>
            <h1>404 - Página não encontrada</h1>
            <p>Ops! A página que você procura não existe.</p>
            <div className={styles.cotainerVoltar}>
                <a href="/">Voltar para a home</a>
            </div>
        </div>
    );
};
export default NotFound;

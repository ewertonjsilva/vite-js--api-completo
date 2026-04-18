/**
 * @file   src\pages\produtos\index.jsx
 * @author Ewerton
 * @date   2026-04-17
 * @desc   [Descrição do componente ou arquivo]
 */

import styles from './index.module.css';

export default function Produtos () {
    return(
        <div className={styles.container}>
            <h1>Produtos</h1>
            <div className={styles.container}>
                <img src="./emconstrucao.svg" alt="emconstrucao" className={styles.imagem} />
                <h3>Página em construção</h3> 
                <p className={styles.mensagem}>Estamos trabalhando nesta página, tente novamente em breve.</p>
            </div>
        </div>
    );
}
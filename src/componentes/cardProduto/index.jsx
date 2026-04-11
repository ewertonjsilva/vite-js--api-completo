import styles from './index.module.css'; 

export default function CardProduto({nome, valor, imagem}) {
    return (
        <div className={styles.card}>
            <div className={styles.imagemContainer}>
                <img
                    src={imagem}
                    alt={nome}
                    className={styles.imagemProduto}
                />
            </div>
            <span className={styles.produtoNome}>{nome}</span>
            <span className={styles.produtoValor}>R$ {valor}</span>
        </div>
    );
}
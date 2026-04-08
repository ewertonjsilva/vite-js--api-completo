
import Slider from "../../componentes/slider";

import styles from './index.module.css';

export default function Home() {
    return (
        <div className="container">
            <Slider />

            <div className={styles.produtos}>

                <div className={styles.card}>
                    <div className={styles.imagemContainer}>
                        <img
                            src='/temp/hamburger-bacon.jpg'
                            alt='Hamburguer Bacon'
                            className={styles.imagemProduto}
                        />
                    </div>
                    <span className={styles.produtoNome}>Hamburguer de Bacon</span>
                    <span className={styles.produtoValor}>R$ 29,99</span>
                </div>

                <div className={styles.card}>
                    <div className={styles.imagemContainer}>
                        <img
                            src='/temp/hamburger-batata.jpg'
                            alt='Hamburguer com Batata'
                            className={styles.imagemProduto}
                        />
                    </div>
                    <span className={styles.produtoNome}>Hamburguer com Batata</span>
                    <span className={styles.produtoValor}>R$ 49,99</span>
                </div>

                <div className={styles.card}>
                    <div className={styles.imagemContainer}>
                        <img
                            src='/temp/sucoLaranja.jpg'
                            alt='Suco de Laranja'
                            className={styles.imagemProduto}
                        />
                    </div>
                    <span className={styles.produtoNome}>Suco de Laranja</span>
                    <span className={styles.produtoValor}>R$ 14,00</span>
                </div>

                <div className={styles.card}>
                    <div className={styles.imagemContainer}>
                        <img
                            src='/temp/sorvete.jpeg'
                            alt='Sorvete de Chocolate'
                            className={styles.imagemProduto}
                        />
                    </div>
                    <span className={styles.produtoNome}>Sorvete de Chocolate</span>
                    <span className={styles.produtoValor}>R$ 17,50</span>
                </div>

            </div>
        </div>
    );
}
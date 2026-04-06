import { Link } from "react-router";

import styles from './index.module.css';

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.social}>
                <Link to="https://www.facebook.com/" target="_blank">
                    <img src="/icones/facebook.svg" alt="facebook" className={styles.icone} />
                </Link>
                <Link to="https://web.telegram.org/" target="_blank">
                    <img src="/icones/telegram.svg" alt="telegram" className={styles.icone} />
                </Link>
                <Link to="https://www.whatsapp.com/?lang=pt_BR" target="_blank">
                    <img src="/icones/whatsapp.svg" alt="whatsapp" className={styles.icone} />
                </Link>
                <Link to="https://www.tiktok.com/pt-BR/" target="_blank">
                    <img src="/icones/tiktok.svg" alt="tiktok" className={styles.icone} />
                </Link>
            </div>
            <p>Lanches BomNurguer de Cidade ME | 00.000.000/0000-00</p>
            <p>Rua Brasil, 1000 - centro - Parapuã/SP | bbgr@bbuguer.com</p>
        </footer>
    );
}
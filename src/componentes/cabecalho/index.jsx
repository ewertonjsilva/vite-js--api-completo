import { useState } from 'react';
import { Link } from "react-router";
import { useLocation } from 'react-router-dom';

import { MdFastfood, MdMenu } from 'react-icons/md';

import styles from './index.module.css';

function Cabecalho() {

    const [mobile, setMobile] = useState(false);

    const rota = useLocation();

    function ativaMenu() {
        if (mobile === false) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }
    console.log(rota);
    
    return (
        <header className={styles.containerNav}>
            <div className={styles.menu}>
                <div>
                    <MdFastfood className={styles.icon} id="logo" />
                    <label id="titulo">BomBurguer</label>
                </div>
                <nav className={styles.menuGrande}>
                    <Link
                        to='/'
                        className={rota.pathname === '/' ? styles.active : ''}
                    >Home</Link>
                    <Link
                        to='/produtos'
                        className={rota.pathname === '/produtos' ? styles.active : ''}
                    >Produtos</Link>

                    <Link
                        to='/sobre'
                        className={rota.pathname === '/sobre' ? styles.active : ''}
                    >Sobre</Link>

                    <Link
                        to='/usuario/cadastro'
                        className={rota.pathname === '/usuario/cadastro' ? styles.active : ''}
                    >Cadastrar</Link>

                    <Link
                        to='/usuario/login'
                        className={rota.pathname === '/usuario/login' ? styles.active : ''}
                    >Login</Link>

                </nav>
                <div className={styles.menuMobile}>
                    <MdMenu onClick={ativaMenu} className={styles.icon} id="logo" />
                </div>
            </div>

            <div
                className={mobile === false ? styles.menuMobileExpandidon : styles.menuMobileExpandidos}
                id="mostraOpMobile"
            >
                <Link
                    to='/'
                    onClick={ativaMenu}
                    className={rota.pathname === '/' ? styles.active : ''}
                >Home</Link>
                <Link
                    to='/produtos'
                    onClick={ativaMenu}
                    className={rota.pathname === '/produtos' ? styles.active : ''}
                >Produtos</Link>
                <Link
                    to='/usuario/cadastro'
                    onClick={ativaMenu}
                    className={rota.pathname === '/usuario/cadastro' ? styles.active : ''}
                >Cadastrar</Link>
                <Link
                    to='/sobre'
                    onClick={ativaMenu}
                    className={rota.pathname === '/sobre' ? styles.active : ''}
                >Sobre</Link>
                <Link
                    to='/usuario/login'
                    onClick={ativaMenu}
                    className={rota.pathname === '/usuario/login' ? styles.active : ''}
                >Login</Link>
            </div>
        </header>
    );
}

export default Cabecalho;
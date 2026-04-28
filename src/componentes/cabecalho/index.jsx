import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { MdFastfood, MdMenu, MdLogout, MdPerson, MdShoppingCart, MdFactory  } from 'react-icons/md';

import styles from './index.module.css';

function Cabecalho() {
    const [mobile, setMobile] = useState(false);
    const { usuario, logout } = useAuth();
    const navigate = useNavigate();
    const rota = useLocation();

    function ativaMenu() {
        setMobile(!mobile);
    }

    const handleLogout = () => {
        logout();
        setMobile(false);
        navigate('/login');
    };

    // Função auxiliar para aplicar a classe active
    const linkStyle = (path) => rota.pathname === path ? styles.active : '';

    return (
        <header className={styles.containerNav}>
            <div className={styles.menu}>
                <div className={styles.logo} onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                    <MdFastfood className={styles.icon} />
                    <label className={styles.titulo}>BomBurguer</label>
                </div>

                <nav className={styles.menuGrande}>
                    <Link to='/' className={linkStyle('/')}>Home</Link>
                    <Link to='/produtos' className={linkStyle('/produtos')}>Produtos</Link>
                    <Link to='/sobre' className={linkStyle('/sobre')}>Sobre</Link>

                    {usuario ? (
                        <>
                            {/* Perfil */}
                            <Link to="/usuario/perfil" className={linkStyle('/usuario/perfil')}>
                                <MdPerson size={28} title="Perfil" />
                            </Link>

                            {/* Carrinho - Apenas Cliente (Tipo 0) */}
                            {usuario.tipo === 0 && (
                                <Link to="/carrinho" className={linkStyle('/carrinho')}>
                                    <MdShoppingCart size={28} title="Carrinho" />
                                </Link>
                            )}
                            
                            {/* Gerenciamento (Tipo 0) */}
                            {usuario.tipo === 1 && (
                                <Link to="/gerenciamento/dashboard" className={linkStyle('/gerenciamento/dashboard')}>
                                    <MdFactory  size={28} title="Gerenciamento" />
                                </Link>
                            )}

                            {/* Botão Sair - Usando a mesma classe de estilo dos links */}
                            <button onClick={handleLogout} className={styles.menuSair}>
                                <MdLogout size={28} title="Sair" />
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to='/cadastro' className={linkStyle('/cadastro')}>Cadastrar</Link>
                            <Link to='/login' className={linkStyle('/login')}>Login</Link>
                        </>
                    )}
                </nav>

                <div className={styles.menuMobile}>
                    <MdMenu onClick={ativaMenu} className={styles.icon} />
                </div>
            </div>

            {/* Menu Mobile Expandido */}
            <div className={mobile ? styles.menuMobileExpandidos : styles.menuMobileExpandidon}>
                <Link to='/' onClick={ativaMenu} className={linkStyle('/')}>Home</Link>
                <Link to='/produtos' onClick={ativaMenu} className={linkStyle('/produtos')}>Produtos</Link>

                {usuario ? (
                    <>
                        <Link to='/usuario-edt' onClick={ativaMenu}>Perfil</Link>
                        {usuario.tipo === 0 && <Link to='/carrinho' onClick={ativaMenu}>Carrinho</Link>}
                        <button onClick={handleLogout} className={styles.btnSairMobile}>Sair</button>
                    </>
                ) : (
                    <>
                        <Link to='/cadastro' onClick={ativaMenu}>Cadastrar</Link>
                        <Link to='/login' onClick={ativaMenu}>Login</Link>
                    </>
                )}
            </div>
        </header>
    );
}

export default Cabecalho;
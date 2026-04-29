import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom"; // Use react-router-dom para consistência
import { useAuth } from '../../context/AuthContext';
import { MdLogin } from "react-icons/md";
import styles from './index.module.css';

import { login as mockupUsuarios } from '../teste/mockup';

function Login() {
    let navigate = useNavigate();
    const { loginUser } = useAuth(); // Hook do nosso contexto de autenticação

    const [email, setEmail] = useState(''); // Alterado de login para email para clareza
    const [senha, setSenha] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        logar();
    }

    function logar() {
        // 1. Procura o usuário no mockup pelo email e senha
        const usuarioEncontrado = mockupUsuarios.find(
            user => user.email === email && user.senha === senha
        );

        if (usuarioEncontrado) {
            // 2. Salva o usuário no Contexto (e localStorage)
            loginUser(usuarioEncontrado);

            // 3. Lógica de Redirecionamento por Nível de Acesso
            // Tipo 1 ou 2 vai para Gerenciamento
            if (usuarioEncontrado.tipo === 1 || usuarioEncontrado.tipo === 2) {
                navigate('/gerenciamento/dashboard');
            }
            // Tipo 0 (ou outros) vai para Home Pública
            else {
                navigate('/');
            }
        } else {
            // 4. Tratamento de erro simples
            alert("E-mail ou senha incorretos!");
        }
    }

    return (
        <div className={styles.containerLog}>
            <div>
                <h2>Acessar o site</h2>
            </div>
            <form id="form" className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="email" // Alterado para type email
                    id="email"
                    className={styles.input}
                    placeholder="E-mail"
                    onChange={v => setEmail(v.target.value)}
                    value={email}
                    required
                />
                <input
                    type="password"
                    id="password"
                    className={styles.input}
                    placeholder="Senha"
                    onChange={v => setSenha(v.target.value)}
                    value={senha}
                    required
                />
                <div className={styles.info}>
                    <Link to='/cadastro'>Não tenho cadastro!</Link>
                    <a href="#">Esqueci o e-mail</a>
                </div>
                <button type="submit" className={styles.botao}>
                    <MdLogin className={styles.ico} /> Entrar
                </button>
            </form>
        </div>
    );
}

export default Login;
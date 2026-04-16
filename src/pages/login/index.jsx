import { useState } from 'react';
import { useNavigate } from "react-router";
import { Link } from "react-router";

import { MdLogin } from "react-icons/md";

import styles from './index.module.css'; 

import { mesas } from '../teste/mockup';

function Login() {

    let navigate = useNavigate();

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        logar();
    }

    async function logar() {

            const dados = {
                usu_email: login,
                usu_senha: senha
            }
            console.log(dados);            
    }

    return (

        <div className={styles.containerLog}>
            <div>
                <h2>Acessar o site</h2>
            </div>
            <form id="form" className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="email"
                    className={styles.input}
                    placeholder="E-mail"
                    onChange={v => setLogin(v.target.value)}
                    value={login}
                />
                <input
                    type="password"
                    id="password"
                    className={styles.input}
                    placeholder="Senha"
                    onChange={v => setSenha(v.target.value)}
                    value={senha}
                />
                <div className={styles.info}>
                    <Link
                        to='/cadastro'
                    >Não tenho cadastro!</Link>
                    <a href="#">Esqueci o e-mail</a>
                </div>
                <button type="submit" className={styles.botao}><MdLogin className={styles.ico} /> Entrar</button>
            </form>
        </div>

    );
}

export default Login; 
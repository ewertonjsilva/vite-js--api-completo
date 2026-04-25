/**
 * @file   src\pages\home\index.jsx
 * @author Ewerton
 * @date   2026-04-24
 * @desc   [Descrição do componente ou arquivo]
 */

import { Link } from 'react-router-dom';
import { MdLunchDining, MdLocalBar, MdDining, MdIcecream, MdFastfood } from 'react-icons/md';

import Slider from "../../componentes/slider";
import CardProduto from '../../componentes/cardProduto';

import styles from './index.module.css';

import { produtos } from '../teste/mockup';

export default function Home() {

    // console.log(produtos);

    return (
        <div className="container">
            <Slider />

            <main className={styles.containerApresentacao}>
                {/* Info local */}
                <img className={styles.imagemLocal} src="./local.jpg" alt="Imagem do local" />
                <div className={styles.containerTxtApresentacao}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quasi consequuntur quas numquam ullam fuga voluptas? Sunt, soluta beatae fugit ipsa eos quam ratione explicabo voluptates blanditiis, suscipit repellendus voluptatem. Hic quasi consequuntur quas numquam ullam fuga voluptas? Sunt, soluta beatae fugit ipsa eos quam ratione explicabo voluptates blanditiis, suscipit repellendus voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quasi consequuntur quas numquam ullam fuga voluptas! Hic quasi consequuntur quas numquam ullam fuga voluptas...
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit aliquid quia ipsum voluptate voluptatibus praesentium, vel qui, eius, facilis reprehenderit saepe atque dicta eveniet quae voluptas commodi assumenda error.
                    </p>
                </div>
            </main>

            <div className={styles.tipos}>
                <MdLunchDining className={styles.tpicon} />
                <MdLocalBar className={styles.tpicon} />
                <MdDining className={styles.tpicon} />
                <MdIcecream className={styles.tpicon} />
                <MdFastfood className={styles.tpicon} />
            </div>
{/* 
            <div className={styles.produtos}>

            {
                produtos.map(item =>
                    <p key={item.nome}>{item.nome}</p>
                )
            }
            </div> */}

            {/* {
                produtos.map(item => 
                        // <CardProduto 
                        //     nome = {item.nome} 
                        //     valor = {item.valor} 
                        //     imagem = {item.imgProduto}
                        // />
                        // <Link
                        //     to={`/produto/${item.id}`}
                        //     key={item.id}
                        //     style={{ textDecoration: 'none', color: 'inherit' }}
                        // >
                        //     <CardProduto
                        //         nome={item.nome}
                        //         valor={item.valor}
                        //         imagem={item.imgProduto}
                        //     />
                        // </Link>
            //         )
            // }

            {/* <div className={styles.card}>
                    <div className={styles.imagemContainer}>
                        <img
                            src='/temp/hamburger-bacon.jpg'
                            alt='Hamburguer Bacon'
                            className={styles.imagemProduto}
                        />
                    </div>
                    <span className={styles.produtoNome}>Hamburguer de Bacon</span>
                    <span className={styles.produtoValor}>R$ 29,99</span>
                </div> */}

            {/* </div> */}
            
            <div className={styles.produtos}>
                {produtos.map(item => (
                    <Link
                        to={`/produto/${item.id}`}
                        key={item.id}
                        className={styles.linkCard} // Usando a classe do CSS Module
                    >
                        <CardProduto
                            nome={item.nome}
                            valor={item.valor}
                            imagem={item.imgProduto}
                        />
                    </Link>
                ))}
            </div> 
        </div>
    );
}
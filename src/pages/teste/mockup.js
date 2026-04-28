/**
 * @file   src\pages\teste\mockup.js
 * @author Ewerton
 * @date   2026-04-17
 * @desc   [Descrição do script ou função]
 */

import prod1 from '../../imagens/temp/hamburger-bacon.jpg';
import prod2 from '../../imagens/temp/hamburger-batata.jpg';
import prod3 from '../../imagens/temp/lancheBasico.jpg';
import prod4 from '../../imagens/temp/sucoLaranja.jpg';
import prod5 from '../../imagens/temp/sucoVerde.jpg';
import prod6 from '../../imagens/temp/sorvete.jpeg';

import ic_lanche from '../../imagens/icones/lanche.svg';
import ic_combo from '../../imagens/icones/todos.svg';
import ic_bebida from '../../imagens/icones/suco.svg';
import ic_sobremesa from '../../imagens/icones/icecream.svg';

import img_ingredientes from '../../imagens/temp/ingredientes.png';

export let produtos = [
    {
        id: 1,
        nome: 'Hamburguer de Bacon',
        imgProduto: prod1,
        valor: '21.00',
        descricao: 'Lanche maravilhoso',
        unidade: 'un.',
        icone: ic_lanche
    },
    {
        id: 2,
        nome: 'Combo hamburguer e batata',
        imgProduto: prod2,
        valor: '33.00',
        descricao: 'Muito delicioso',
        unidade: 'un.',
        icone: ic_combo
    },
    {
        id: 3,
        nome: 'Lanche básico',
        imgProduto: prod3,
        valor: '16.00',
        descricao: 'Para quem come pouco',
        unidade: 'un.',
        icone: ic_lanche
    },
    {
        id: 4,
        nome: 'Suco de laranja',
        imgProduto: prod4,
        valor: '8.25',
        descricao: 'Refrescante',
        unidade: 'copo',
        icone: ic_bebida
    },
    {
        id: 5,
        nome: 'Suco verde',
        imgProduto: prod5,
        valor: '12.00',
        descricao: 'Verdrescante',
        unidade: 'copo',
        icone: ic_bebida
    },
    {
        id: 6,
        nome: 'Sorvete',
        imgProduto: prod6,
        valor: '13.00',
        descricao: 'Um sorvete aleatório',
        unidade: 'taça',
        icone: ic_sobremesa
    },
]

export let mkpUfs = [
    {
        id: 35,
        uf: 'SP',
    },
    {
        id: 33,
        uf: 'RJ'
    }
]

export let mkpCidades = [
    {
        id: 1,
        cidade: 'Tupã'
    },
    {
        id: 2,
        cidade: 'Parapuã'
    },
    {
        id: 3,
        cidade: 'Marília'
    },
];

export let carrinho = [
    {
        id: 1,
        nome: 'Hamburguer de Bacon',
        imagem: prod1,
        quantidade: 2,
        valor: '21.00',
        observacao: 'Hamburguer bem passado'
    },
    {
        id: 1,
        nome: 'Hamburguer de Bacon',
        imagem: prod1,
        quantidade: 1,
        valor: '21.00',
        observacao: ''
    },
    {
        id: 4,
        nome: 'Suco de laranja',
        imagem: prod4,
        quantidade: 1,
        valor: '8.25',
        observacao: 'Sem açucar'
    },
    {
        id: 4,
        nome: 'Suco de laranja',
        imagem: prod4,
        quantidade: 2,
        valor: '8.25',
        observacao: 'Com açucar e gelo'
    },
]

export let mesas = [
    {
        "id": 1,
        "nome": "1",
        "status": 1,
        "lugares": 4,
        "pedido": null
    },
    {
        "id": 2,
        "nome": "2",
        "status": 0,
        "lugares": 2,
        "pedido": null
    },
    {
        "id": 3,
        "nome": "3",
        "status": 0,
        "lugares": 2,
        "pedido": null
    },
    {
        "id": 4,
        "nome": "4",
        "status": 2,
        "lugares": 4,
        "pedido": null
    },
    {
        "id": 5,
        "nome": "5",
        "status": 3,
        "lugares": 4,
        "pedido": 5
    }
];

export let ingredientesMock = [
    {
        "id": 1,
        "nome": "Pão",
        "img": img_ingredientes,
        "custo_adicional": 0.00
    },
    {
        "id": 2,
        "nome": "Frango",
        "img": img_ingredientes,
        "custo_adicional": 7.00
    },
    {
        "id": 3,
        "nome": "Salmão",
        "img": img_ingredientes,
        "custo_adicional": 10.00
    },
    {
        "id": 4,
        "nome": "Alface",
        "img": img_ingredientes,
        "custo_adicional": 4.50
    },
    {
        "id": 5,
        "nome": "Rúcula",
        "img": img_ingredientes,
        "custo_adicional": 4.00
    },
    {
        "id": 6,
        "nome": "Tomate",
        "img": img_ingredientes,
        "custo_adicional": 5.25
    },
    {
        "id": 7,
        "nome": "Ervilha",
        "img": img_ingredientes,
        "custo_adicional": 6.00
    },
    {
        "id": 8,
        "nome": "Milho",
        "img": img_ingredientes,
        "custo_adicional": 5.00
    },
    {
        "id": 9,
        "nome": "Pepino",
        "img": img_ingredientes,
        "custo_adicional": 4.50
    },
    {
        "id": 10,
        "nome": "Cebola",
        "img": img_ingredientes,
        "custo_adicional": 4.00
    },
    {
        "id": 11,
        "nome": "Cebola Roxa",
        "img": img_ingredientes,
        "custo_adicional": 4.80
    },
    {
        "id": 12,
        "nome": "Aspargo",
        "img": img_ingredientes,
        "custo_adicional": 5.90
    },
    {
        "id": 13,
        "nome": "Batata",
        "img": img_ingredientes,
        "custo_adicional": 25.40
    },
    {
        "id": 14,
        "nome": "Uva",
        "img": img_ingredientes,
        "custo_adicional": 0.00
    },
    {
        "id": 15,
        "nome": "Abacaxi",
        "img": img_ingredientes,
        "custo_adicional": 0.00
    },
    {
        "id": 16,
        "nome": "Limão",
        "img": img_ingredientes,
        "custo_adicional": 0.00
    },
    {
        "id": 17,
        "nome": "Laranja",
        "img": img_ingredientes,
        "custo_adicional": 0.00
    },
    {
        "id": 18,
        "nome": "Bacon",
        "img": img_ingredientes,
        "custo_adicional": 6.00
    },
    {
        "id": 19,
        "nome": "Couve",
        "img": img_ingredientes,
        "custo_adicional": 5.00
    },
    {
        "id": 20,
        "nome": "Carne bovina",
        "img": img_ingredientes,
        "custo_adicional": 8.00
    },
    {
        "id": 21,
        "nome": "Carne suína",
        "img": img_ingredientes,
        "custo_adicional": 7.00
    }
];

export let login = [
    {
        "id": 1,
        "nome": "Agnelson",
        "tipo": 0,
        "email": "cliente@email.com",
        "senha": "123"
    },
    {
        "id": 2,
        "nome": "Gionelson",
        "tipo": 1,
        "email": "admin@email.com",
        "senha": "123"
    },
    {
        "id": 3,
        "nome": "Edelson",
        "tipo": 2,
        "email": "gerente@email.com",
        "senha": "123"
    }
];
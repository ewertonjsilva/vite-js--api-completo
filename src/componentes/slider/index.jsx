import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useState, useEffect } from 'react';

import { Carousel } from 'react-responsive-carousel';

import api from '../../services/apis';

// import promo1 from '../../imagens/temp/slider/promoGenerica.png';
// import promo2 from '../../imagens/temp/slider/promoLanchePeixe.png';
// import promo3 from '../../imagens/temp/slider/promoSaladaDaCasa.png';
// import promo4 from '../../imagens/temp/slider/promoSucoLaranja.png';

export default function Slider() {

    const [promocoes, setPromocoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    const fetchDados = async () => {
        try {
            setLoading(true);
            // O await pausa a execução até a resposta chegar
            const response = await api.get(`/produtos/promocao`);
            setPromocoes(response.data.dados);
        } catch (err) {
            // O Axios coloca o erro detalhado em err.response
            console.error("Erro na requisição:", err.message);
            setErro("Não foi possível carregar os dados.");
        } finally {
            // Executa independente de ter dado erro ou sucesso
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDados();
    }, []);

    if (loading && promocoes.length === 0) return <p>Carregando dados...</p>;
    if (erro) return <p style={{ color: 'red' }}>{erro}</p>;

    return (
        <Carousel
            className="slider"
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={5000}
        >
            {
                promocoes.map((item, index) => (
                    <div key={index}>
                        <img src={item.img} alt={`Promoção ${index + 1}`} />
                    </div>
                ))
            }

            {/* <div>
                <img src={promo1} alt="promoção 1" />
            </div>
            <div>
                <img src={promo2} alt="promoção 2" />
            </div>
            <div>
                <img src={promo3} alt="promoção 3" />
            </div>
            <div>
                <img src={promo4} alt="promoção 4" />
            </div> */}
            
        </Carousel>
    );
}

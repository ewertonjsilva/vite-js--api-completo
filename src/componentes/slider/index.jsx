import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';

import promo1 from '../../../public/temp/slider/promoGenerica.png';
import promo2 from '../../../public/temp/slider/promoLanchePeixe.png';
import promo3 from '../../../public/temp/slider/promoSaladaDaCasa.png';
import promo4 from '../../../public/temp/slider/promoSucoLaranja.png';

export default function Slider() {
    return (
        <Carousel
            className="slider"
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={5000}
        >
            <div>
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
            </div>
        </Carousel>
    );
}

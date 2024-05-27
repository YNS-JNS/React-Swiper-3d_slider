// ____________________________
// ProductSlider.jsx component:
// ____________________________
import React from 'react';
// ____________________________
// Import Card component
import CardSlider from './CardSlider';
// ____________________________
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// ____________________________
// Import Swiper modules
import { EffectCoverflow, Pagination, Navigation, A11y, Autoplay } from 'swiper/modules';
// ____________________________
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// ____________________________
// Import Custom Css Styles
import "../styles/style.css";
// ____________________________
// Import icons
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// ____________________________
// Import images
import slide_image_1 from '../assets/images/img_electro1.png';
import slide_image_2 from '../assets/images/img_electro2.png';
import slide_image_3 from '../assets/images/img_electro3.png';
import slide_image_4 from '../assets/images/img_electro4.png';
import slide_image_5 from '../assets/images/img_electro5.png';
import slide_image_6 from '../assets/images/img_electro6.png';
import slide_image_7 from '../assets/images/img_electro7.png';
// ____________________________

function ProductSlider() {
    return (
        <div className="container">
            <h1 className="heading">Best Products</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                speed={500}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                // autoplay={{
                //     delay: 3500,
                //     disableOnInteraction: false,
                // }}
                modules={[EffectCoverflow, Pagination, Navigation, A11y, Autoplay]}
                className="swiper_container"
            >
                {[slide_image_1, slide_image_2, slide_image_3, slide_image_4, slide_image_5, slide_image_6, slide_image_7].map((image, index) => (
                    <SwiperSlide key={index}>
                        <CardSlider image={image} name={`Flower ${index + 1}`} newPrice="1000" oldPrice="1200" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ProductSlider;

import React, { useState } from 'react';
import Slider from 'react-slick';
import '../../style/homePage/SuperPriceOffer.css'
import data from '../../data.json';

const SuperPriceOffer = () => {

const products = data.firstCarousel;


const cart = [];


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    const [hoverStates, setHoverStates] = useState(Array(products.length).fill(false));

    const handleClick = (index) => {
        cart.push(products[index]);
        console.log(cart)
    };


    const handleMouseEnter = (index) => {
        const updatedHoverStates = [...hoverStates];
        updatedHoverStates[index] = true;
        setHoverStates(updatedHoverStates);
    };

    const handleMouseLeave = (index) => {
        const updatedHoverStates = [...hoverStates];
        updatedHoverStates[index] = false;
        setHoverStates(updatedHoverStates);
    };


    return (
        <div className='superSection'>
            <div className='superTitle'>
                <h1>Süper Fiyat, Süper Teklif</h1>
                <a href='#'>Tümü &gt;</a>
            </div>
            <Slider {...settings}>
                <div className='superImg'>
                    <a href=''>
                        <img
                            src='https://images.hepsiburada.net/banners/s/0/224-371/homepageImage2099_20230911133304.png/format:webp'
                            alt='Süper Fiyat Süper Teklif'
                        />
                    </a>
                </div>
                {products.map((product, index) => (
                    <div
                        className='productContainer'
                        onMouseLeave={() => handleMouseLeave(index)}
                        key={index}
                        style={{display: 'flex'}}>
                        <div className='productTitle'>
                            <a href='#'>
                                <h1>{product.title}</h1>
                            </a>
                        </div>
                        <div className='imgContainer'>
                            <a href='#'>
                                <img
                                    src={product.image}
                                    alt={product.image}
                                />
                            </a>
                        </div>

                        <button
                            className={`addToCart ${hoverStates[index] ? 'visible' : ''}`}
                            onClick={() => handleClick(index)}>
                            Sepete ekle
                        </button>
                        <div className={`productPrice ${hoverStates[index] ? 'hidden' : ''}`}>
                            <div
                                className={`price ${hoverStates[index] ? 'hidden' : ''}`}
                                onMouseEnter={() => handleMouseEnter(index)}>
                                {product.price} <span>TL</span>
                            </div>
                            <div className='oldPrice'>
                                {product.oldPrice && <h2>{product.oldPrice} TL</h2>}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SuperPriceOffer;

import React from 'react';
import data from '../../data.json';
import '../../style/homePage/adCards.css'

const AdCards = () => {
    const cards = data.firstCard;

    return (
        <div className='adCardsContainer'>
            {cards.map((card, index) => (
                <div className='adCards' key={index}>
                    <div
                        className='adCardTitle'
                        dangerouslySetInnerHTML={{__html: card.title}}></div>
                    <div className='addCardImg'>
                        <img
                            src={card.img}
                            alt={card.img}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdCards;

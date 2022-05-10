import React from 'react'
import Card from './Card';
import "./messcard.css"

const MessCard = (props) => (
  <div className="cards-container" >
    {
      props.cards.map((card) => (
        <Card title={ card.title }
          content={ card.content }
          imgUrl={ card.imgUrl } price={card.price} />
      ))
    }
  </div>
);

export default MessCard;
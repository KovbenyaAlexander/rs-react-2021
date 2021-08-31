import React from 'react';
import data from '../../Data';
import Card from './Card/Card';
import css from './CardList.module.css';

const CardsList = () => {
  const dataArray = data.map((card) => (
    <Card
      key={card.id}
      description={card.description}
      title={card.title}
      price={card.price}
      img={card.img}
    />
  ));

  return <div className={css.wrapper}>{dataArray}</div>;
};

export default CardsList;

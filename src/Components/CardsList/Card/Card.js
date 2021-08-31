import React from 'react';
import PropTypes from 'prop-types';
import css from './Card.module.css';

const Card = ({ description, title, price, img }) => (
  <div className={css.container}>
    <img className={css.img} src={img} alt="img" />
    <h1 className={css.title}>{title}</h1>
    <p className={css.price}>{price}</p>
    <p>{description}</p>
  </div>
);

Card.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Card;

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import css from './Card.module.css';

const Card = ({ data }) => (
  <NavLink className={css.link} to={`/details/${data._id}`}>
    <div className={css.cardContainer}>
      <p>
        <span className={css.fieldOfCard}>name:</span>
        {data.name ? ` ${data.name}` : ' not found'}
      </p>
      <p>
        <span className={css.fieldOfCard}>race:</span>
        {data.race ? ` ${data.race}` : ' not found'}
      </p>

      <p>
        <span className={css.fieldOfCard}>gender:</span>
        {data.gender ? `${data.gender}` : ' not found'}
      </p>
      <p>
        <span className={css.fieldOfCard}>race:</span>
        {data.race ? ` ${data.race}` : ' not found'}
      </p>
      <p>
        <span className={css.fieldOfCard}>birth:</span>
        {data.birth ? ` ${data.birth}` : ' not found'}
      </p>
      <p>
        <span className={css.fieldOfCard}>death:</span>
        {data.death ? ` ${data.death}` : ' not found'}
      </p>
      <p>
        <span className={css.fieldOfCard}>hair:</span>
        {data.death ? ` ${data.death}` : ' not found'}
      </p>
      <p>
        <span className={css.fieldOfCard}>realm:</span>
        {data.realm ? ` ${data.realm}` : ' not found'}
      </p>
    </div>
  </NavLink>
);

export default Card;

Card.propTypes = {
  data: PropTypes.shape({
    race: PropTypes.string,
    name: PropTypes.string,
    gender: PropTypes.string,
    birth: PropTypes.string,
    death: PropTypes.string,
    hair: PropTypes.string,
    realm: PropTypes.string,
    wikiUrl: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

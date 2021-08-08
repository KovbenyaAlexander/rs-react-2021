import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import css from './Card.module.css';

const Card = ({ data }) => (
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

    {data.wikiUrl ? (
      <a
        href={data.wikiUrl}
        className={css.link}
        target="_blank"
        rel="noreferrer"
      >
        link to wiki
      </a>
    ) : (
      'link not found'
    )}
    <br />
    <NavLink className={css.link} to={`/details/${data._id}`}>
      About
    </NavLink>
  </div>
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

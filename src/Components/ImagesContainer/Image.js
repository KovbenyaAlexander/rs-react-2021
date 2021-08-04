import React from 'react';
import PropTypes from 'prop-types';
import css from './Image.module.css';

const Image = ({ data }) => {
  const src = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`;
  return (
    <div>
      <img className={css.img} key={data.id} src={src} alt="imgFromApi" />
    </div>
  );
};

export default Image;

Image.propTypes = {
  data: PropTypes.shape({
    server: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
  }).isRequired,
};

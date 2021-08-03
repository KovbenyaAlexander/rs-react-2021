import React from 'react';
import PropTypes from 'prop-types';
import css from './ImagesContainer.module.css';

const ImagesContainer = ({ data }) => {
  const arrOfImages = data.map((item) => {
    const src = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`;
    return <img key={item.id} className={css.img} src={src} alt="imgFromApi" />;
  });

  return <div className={css.imagesContainer}>{arrOfImages}</div>;
};

export default ImagesContainer;

ImagesContainer.propTypes = {
  data: PropTypes.shape([
    {
      server: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      secret: PropTypes.string.isRequired,
    },
  ]).isRequired,
};

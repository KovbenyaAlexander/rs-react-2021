import React from 'react';
import PropTypes from 'prop-types';
import css from './ImagesContainer.module.css';
import Image from './Image';

const ImagesContainer = ({ data }) => {
  // eslint-disable-next-line no-underscore-dangle
  const arrOfImages = data.map((item) => <Image key={item._id} data={item} />);

  return <div className={css.imagesContainer}>{arrOfImages}</div>;
};

export default ImagesContainer;

ImagesContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

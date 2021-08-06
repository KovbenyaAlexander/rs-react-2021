import React from 'react';
import PropTypes from 'prop-types';
import css from './Image.module.css';

const Image = ({ data }) => {
  console.log('');

  return (
    <div>
      <p>
        race:
        {data.race}
      </p>
      <p>
        name:
        {data.name}
      </p>
      <p>
        gender:
        {data.gender}
      </p>
      <p>
        race:
        {data.race}
      </p>
    </div>
  );
};

export default Image;

Image.propTypes = {
  data: PropTypes.shape({
    race: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
  }).isRequired,
};

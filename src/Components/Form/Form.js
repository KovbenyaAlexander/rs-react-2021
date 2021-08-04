import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSearchHandler }) => {
  const [searchText, setSearchText] = useState('');

  const onChangeHandler = (e) => {
    const newValue = e.target.value;
    setSearchText(newValue);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSearchHandler(searchText);
  };

  return (
    <form onSubmit={(e) => onSubmitHandler(e)}>
      <input
        type="text"
        value={searchText}
        onChange={(e) => onChangeHandler(e)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

Form.propTypes = {
  onSearchHandler: PropTypes.func.isRequired,
};

export default Form;

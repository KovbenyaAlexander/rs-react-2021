import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';

const Form = ({ onSearchHandler }) => {
  const [searchText, setSearchText] = useState('car');

  const onChangeHandler = (e) => {
    const newValue = e.target.value;
    setSearchText(newValue);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSearchHandler(searchText);
  };

  return (
    <form className={css.formContainer} onSubmit={(e) => onSubmitHandler(e)}>
      <span className={css.descriptionOfInput}>Serach images:</span>
      <input
        type="text"
        className={css.input}
        value={searchText}
        placeholder="Search text"
        onChange={(e) => onChangeHandler(e)}
      />
      <button className={css.submit} type="submit">
        Search
      </button>
    </form>
  );
};

Form.propTypes = {
  onSearchHandler: PropTypes.func.isRequired,
};

export default Form;

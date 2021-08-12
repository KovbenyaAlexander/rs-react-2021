import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import css from './Form.module.css';
import { setSearchText } from '../../redux/actions/actions';
import getAllCharacters from '../../redux/actions/thunk/getAllCharacters';

const SearchForm = ({ setSearchText, getAllCharacters }) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSearchText(inputValue);
    getAllCharacters();
  };

  return (
    <form className={css.formContainer} onSubmit={(e) => onSubmitHandler(e)}>
      <span className={css.descriptionOfInput}>Serach characters by name:</span>
      <input
        type="text"
        className={css.input}
        value={inputValue}
        placeholder="Search text"
        onChange={(e) => onChangeHandler(e)}
      />
      <button className={css.submit} type="submit">
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  getAllCharacters: PropTypes.func.isRequired,
  setSearchText: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setSearchText: (searchText) => dispatch(setSearchText(searchText)),
  getAllCharacters: () => dispatch(getAllCharacters()),
});

export default connect(null, mapDispatchToProps)(SearchForm);

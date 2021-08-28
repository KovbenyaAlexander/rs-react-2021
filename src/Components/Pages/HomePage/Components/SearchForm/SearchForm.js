import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import css from './Form.module.css';
import { setSearchText } from '../../../../../redux/actions/actions';
import getAllCharacters from '../../../../../redux/actions/thunk/getAllCharacters';

const SearchForm = ({ setSearchText, getAllCharacters, searchText }) => {
  const onChangeHandler = (e) => {
    const newValue = e.target.value;
    setSearchText(newValue);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSearchText(searchText);
    getAllCharacters();
  };

  return (
    <form className={css.formContainer} onSubmit={(e) => onSubmitHandler(e)}>
      <span className={css.descriptionOfInput}>Search characters by name:</span>
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

SearchForm.propTypes = {
  getAllCharacters: PropTypes.func.isRequired,
  setSearchText: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  searchText: state.searchText,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchText: (searchText) => dispatch(setSearchText(searchText)),
  getAllCharacters: () => dispatch(getAllCharacters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

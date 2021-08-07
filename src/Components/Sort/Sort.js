import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Sort.module.css';

const Sort = ({ setSortHandler }) => {
  const initialState = {
    'name:asc': true,
    'name:desc': false,
    'race:asc': false,
    'race:desc': false,
  };

  const [checkedField, setCheckedField] = useState(initialState);

  const onChangeHandler = (e) => {
    const currentActiveRadioButton = e.target.id;

    setCheckedField(() => ({
      'name:asc': false,
      'name:desc': false,
      'race:asc': false,
      'race:desc': false,
      [currentActiveRadioButton]: true,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    Object.keys(checkedField).forEach((sortValue) => {
      if (checkedField[sortValue]) {
        setSortHandler(sortValue);
      }
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className={css.formContainer}>
      <div className={css.listContainer}>
        Sort by:
        <label className={css.label} htmlFor="name:asc">
          <input
            type="radio"
            name="sort"
            id="name:asc"
            required
            checked={checkedField['name:asc']}
            onChange={(e) => onChangeHandler(e)}
          />
          <span className={css.sortDescription}>name аscending</span>
        </label>
        <label className={css.label} htmlFor="name:desc">
          <input
            type="radio"
            name="sort"
            id="name:desc"
            required
            checked={checkedField['name:desc']}
            onChange={(e) => onChangeHandler(e)}
          />
          <span className={css.sortDescription}>name descending</span>
        </label>
        <label className={css.label} htmlFor="race:asc">
          <input
            type="radio"
            name="sort"
            id="race:asc"
            required
            checked={checkedField['race:asc']}
            onChange={(e) => onChangeHandler(e)}
          />
          <span className={css.sortDescription}>race аscending</span>
        </label>
        <label className={css.label} htmlFor="race:desc">
          <input
            type="radio"
            name="sort"
            id="race:desc"
            required
            checked={checkedField['race:desc']}
            onChange={(e) => onChangeHandler(e)}
          />
          <span className={css.sortDescription}>race descending</span>
        </label>
      </div>
      <button className={css.submit} type="submit">
        Change
      </button>
    </form>
  );
};

Sort.propTypes = {
  setSortHandler: PropTypes.func.isRequired,
};

export default Sort;

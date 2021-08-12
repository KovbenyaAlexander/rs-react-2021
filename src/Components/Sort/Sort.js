import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import css from './Sort.module.css';
import { setSortType } from '../../redux/actions/actions';
import getAllCharacters from '../../redux/actions/thunk/getAllCharacters';

const Sort = ({ setSortType, getAllCharacters }) => {
  const typeOfSortInit = {
    name: true,
    race: false,
    gender: false,
    birth: false,
    death: false,
    hair: false,
    realm: false,
  };

  const sortDirectionInit = {
    asc: true,
    desc: false,
  };

  const [typeOfSort, setCheckedField] = useState(typeOfSortInit);
  const [sortDirection, setSortDirection] = useState(sortDirectionInit);

  const onChangeHandler = (e) => {
    const currentActiveRadioButton = e.target.id;

    if (
      currentActiveRadioButton !== 'asc'
      && currentActiveRadioButton !== 'desc'
    ) {
      setCheckedField(() => ({
        ...typeOfSortInit,
        name: false,
        [currentActiveRadioButton]: true,
      }));
    } else {
      setSortDirection(() => ({
        asc: false,
        desc: false,
        [currentActiveRadioButton]: true,
      }));
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    Object.keys(typeOfSort).forEach((sortValue) => {
      if (typeOfSort[sortValue]) {
        if (sortDirection.asc) {
          setSortType(`${sortValue}:asc`);
          getAllCharacters();
        } else {
          setSortType(`${sortValue}:desc`);
          getAllCharacters();
        }
      }
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className={css.formContainer}>
      <div className={css.fieldsOfSort}>
        Sort by:
        <label className={css.label} htmlFor="name">
          <input
            className={css.input}
            type="radio"
            name="sort"
            id="name"
            required
            checked={typeOfSort.name}
            onChange={(e) => onChangeHandler(e)}
          />
          <span className={css.sortDescription}>name</span>
        </label>
        <label className={css.label} htmlFor="race">
          <input
            className={css.input}
            type="radio"
            name="sort"
            id="race"
            required
            checked={typeOfSort.race}
            onChange={(e) => onChangeHandler(e)}
          />
          <span className={css.sortDescription}>race</span>
        </label>
        <label className={css.label} htmlFor="gender">
          <input
            className={css.input}
            type="radio"
            name="sort"
            id="gender"
            required
            checked={typeOfSort.gender}
            onChange={(e) => onChangeHandler(e)}
          />
          <span className={css.sortDescription}>gender</span>
        </label>
        <label className={css.label} htmlFor="birth">
          <input
            className={css.input}
            type="radio"
            name="sort"
            id="birth"
            required
            checked={typeOfSort.birth}
            onChange={(e) => onChangeHandler(e)}
          />
          <span className={css.sortDescription}>birth</span>
        </label>
        <label className={css.label} htmlFor="death">
          <input
            className={css.input}
            type="radio"
            name="sort"
            id="death"
            required
            checked={typeOfSort.death}
            onChange={(e) => onChangeHandler(e)}
          />
          <span className={css.sortDescription}>death</span>
        </label>
        <label className={css.label} htmlFor="hair">
          <input
            className={css.input}
            type="radio"
            name="sort"
            id="hair"
            required
            checked={typeOfSort.hair}
            onChange={(e) => onChangeHandler(e)}
          />
          <span className={css.sortDescription}>hair</span>
        </label>
        <label className={css.label} htmlFor="realm">
          <input
            className={css.input}
            type="radio"
            name="sort"
            id="realm"
            required
            checked={typeOfSort.realm}
            onChange={(e) => onChangeHandler(e)}
          />
          <span className={css.sortDescription}>realm</span>
        </label>
      </div>

      <div className={css.sortDirection}>
        <label className={css.label} htmlFor="desc">
          <input
            className={css.input}
            type="radio"
            name="sortDescription"
            id="desc"
            required
            checked={sortDirection.desc}
            onChange={(e) => onChangeHandler(e)}
          />
          <span className={css.sortDescription}>Descending</span>
        </label>
        <label className={css.label} htmlFor="asc">
          <input
            className={css.input}
            type="radio"
            name="sortDescription"
            id="asc"
            required
            checked={sortDirection.asc}
            onChange={(e) => onChangeHandler(e)}
          />
          <span className={css.sortDescription}>Ascending</span>
        </label>
      </div>
      <button className={css.submit} type="submit">
        Change
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setSortType: (sort) => dispatch(setSortType(sort)),
  getAllCharacters: () => dispatch(getAllCharacters()),
});

Sort.propTypes = {
  setSortType: PropTypes.func.isRequired,
  getAllCharacters: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Sort);

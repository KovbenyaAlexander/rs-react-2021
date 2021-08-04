import React from 'react';
import { useState } from 'react/cjs/react.development';
import css from './Sort.module.css';

const Sort = () => {
  const initialState = {
    'date-posted-asc': false,
    'date-posted-desc': false,
    'interestingness-desc': false,
    'interestingness-asc': false,
    relevance: true,
  };

  const [checkedField, setCheckedField] = useState(initialState);

  const onChangeHandler = (e) => {
    const currentActiveRadioButton = e.target.id;

    setCheckedField(() => ({
      ...initialState,
      relevance: false,
      [currentActiveRadioButton]: true,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(checkedField);
  };

  return (
    <form onSubmit={onSubmitHandler} className={css.form}>
      <label className={css.label} htmlFor="relevance">
        <input
          type="radio"
          name="sort"
          id="relevance"
          required
          checked={checkedField.relevance}
          onChange={(e) => onChangeHandler(e)}
        />
        relevance
      </label>
      <label className={css.label} htmlFor="date-posted-asc">
        <input
          type="radio"
          name="sort"
          id="date-posted-asc"
          required
          checked={checkedField['date-posted-asc']}
          onChange={(e) => onChangeHandler(e)}
        />
        date-posted-asc
      </label>
      <label className={css.label} htmlFor="date-posted-desc">
        <input
          type="radio"
          name="sort"
          id="date-posted-desc"
          onChange={(e) => onChangeHandler(e)}
          checked={checkedField['date-posted-desc']}
        />
        date-posted-desc
      </label>
      <label className={css.label} htmlFor="interestingness-desc">
        <input
          type="radio"
          name="sort"
          id="interestingness-desc"
          required
          checked={checkedField['interestingness-desc']}
          onChange={(e) => onChangeHandler(e)}
        />
        interestingness-desc
      </label>
      <label className={css.label} htmlFor="interestingness-asc">
        <input
          type="radio"
          name="sort"
          id="interestingness-asc"
          required
          checked={checkedField['interestingness-asc']}
          onChange={(e) => onChangeHandler(e)}
        />
        interestingness-asc
      </label>

      <button type="submit">Change</button>
    </form>
  );
};

export default Sort;

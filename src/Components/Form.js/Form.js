import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';

const Form = ({ addCard }) => {
  const initialState = {
    name: '',
    email: '',
    date: '',
    sex: '',
    family: '',
    isAgree: false,
  };

  const [state, setState] = useState(initialState);

  const onChangeHandler = (e) => {
    const typeOfInput = e.target.id;
    const newValue = e.target.value;

    if (typeOfInput === 'agreement') {
      setState((prevState) => {
        const PrevState = prevState;
        return {
          ...PrevState,
          isAgree: e.target.checked,
        };
      });
    }

    if (typeOfInput === 'single' || typeOfInput === 'married') {
      setState((prevState) => {
        const PrevState = prevState;
        return {
          ...PrevState,
          family: typeOfInput,
        };
      });
    }

    setState((prevState) => {
      const PrevState = prevState;
      return {
        ...PrevState,
        [typeOfInput]: newValue,
      };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addCard(state);
    setState(initialState);
  };

  return (
    <form className={css.form} onSubmit={onSubmitHandler}>
      <label htmlFor="name">
        Name
        <input
          value={state.name}
          onChange={(e) => {
            onChangeHandler(e);
          }}
          type="text"
          id="name"
          name="name"
          required
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          id="email"
          value={state.email}
          name="email"
          required
          onChange={(e) => {
            onChangeHandler(e);
          }}
        />
      </label>
      <label htmlFor="date">
        Date of birth
        <input
          type="date"
          id="date"
          name="date"
          value={state.date}
          onChange={(e) => {
            onChangeHandler(e);
          }}
          required
        />
      </label>

      <label htmlFor="sex" required>
        Sex
        <select
          id="sex"
          name="sex"
          value={state.sex}
          required
          onChange={(e) => {
            onChangeHandler(e);
          }}
        >
          <option value=""> </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>

      <br />

      <span>Family status</span>
      <label htmlFor="single">
        single
        <input
          type="radio"
          id="single"
          name="familyStatus"
          required
          onChange={(e) => {
            onChangeHandler(e);
          }}
        />
      </label>
      <label htmlFor="married">
        married
        <input
          type="radio"
          id="married"
          name="familyStatus"
          onChange={(e) => {
            onChangeHandler(e);
          }}
        />
      </label>
      <br />
      <label htmlFor="agreement">
        <input
          id="agreement"
          name="agreement"
          type="checkbox"
          checked={state.isAgree}
          onChange={(e) => onChangeHandler(e)}
          required
        />
        I agree to the Terms of Service
      </label>
      <input type="submit" />
    </form>
  );
};

export default Form;

Form.propTypes = {
  addCard: PropTypes.func.isRequired,
};

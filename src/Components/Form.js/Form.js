import React, { useState } from 'react';
import css from './Form.module.css';

const Form = () => {
  const initialState = {
    name: '',
    email: '',
    date: '',
    sex: '',
    family: '',
    isAgree: '',
  };

  const [state, setState] = useState(initialState);

  const onChangeHandler = (e) => {
    const typeOfInput = e.target.id;
    const newValue = e.target.value;

    if (typeOfInput === 'single' || typeOfInput === 'married') {
      setState((prevState) => {
        const PrevState = prevState;
        return {
          ...PrevState,
          family: typeOfInput,
        };
      });
      return;
    }

    setState((prevState) => {
      const PrevState = prevState;
      return {
        ...PrevState,
        [typeOfInput]: newValue,
      };
    });
  };

  return (
    <div className={css.form}>
      <form>
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
          <input id="agreement" name="agreement" type="checkbox" required />I
          agree to the Terms of Service
        </label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;

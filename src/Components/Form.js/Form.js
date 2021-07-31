import React from 'react';
import css from './Form.module.css';

const Form = () => (
  <div className={css.form}>
    <form>
      <label htmlFor="name">
        Name
        <input type="text" id="name" required />
      </label>
      <label htmlFor="email">
        Email
        <input type="text" id="email" required />
      </label>
      <label htmlFor="date">
        Date of birth
        <input type="date" id="date" required />
      </label>

      <label htmlFor="select" required>
        Sex
        <select id="select" required>
          <option value=""> </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>

      <br />

      <span>Family status</span>
      <label htmlFor="single">
        single
        <input type="radio" id="single" name="familyStatus" required />
      </label>
      <label htmlFor="married">
        married
        <input type="radio" id="married" name="familyStatus" />
      </label>
      <label htmlFor="divorced">
        divorced
        <input type="radio" id="divorced" name="familyStatus" />
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

export default Form;

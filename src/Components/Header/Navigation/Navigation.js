import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => (
  <nav className={css.nav}>
    <ul className={css.navList}>
      <li>
        <NavLink className={css.link} to="/" activeClassName={css.active} exact>
          Main page
        </NavLink>
      </li>
      <li>
        <NavLink className={css.link} to="/about">
          About
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;

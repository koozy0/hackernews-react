import '../styles/header.scss';

import DarkModeToggle from './DarkModeToggle';
import { NavLink } from 'react-router-dom';
import React from 'react';

const title = 'Hacker News';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__group">
          <h1 className="header__logo">{title}</h1>
        </div>
        <div className="header__spacer"></div>
        <div className="header__group">
          <NavLink to="/">home</NavLink>
          <NavLink to="/stories">stories</NavLink>
          <NavLink to="/submit">submit</NavLink>
          <NavLink to="/about">about</NavLink>
        </div>
        <div className="header__group">
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;

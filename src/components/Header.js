import '../styles/header.scss';

import React, { useEffect, useState } from 'react';

import DarkModeToggle from './DarkModeToggle';
import { NavLink } from 'react-router-dom';

const title = 'Hacker News';

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 30;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [scroll, setScroll]);

  return (
    <header className={scroll ? 'header header--scrolled' : 'header'}>
      <nav className="header__nav">
        <div className="header__group">
          <NavLink to="/" className="header__logo">
            <h1>{title}</h1>
          </NavLink>
        </div>
        <div className="header__spacer"></div>
        <div className="header__group">
          <NavLink to="/" className="header__link link">
            home
          </NavLink>
          <NavLink
            to="/stories"
            className="header__link link"
            activeClassName="link--active"
          >
            stories
          </NavLink>
          <NavLink
            to="/submit"
            className="header__link link"
            activeClassName="link--active"
          >
            submit
          </NavLink>
          <NavLink
            to="/about"
            className="header__link link"
            activeClassName="link--active"
          >
            about
          </NavLink>
        </div>
        <div className="header__group">
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;

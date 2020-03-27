import '../styles/footer.scss';

import { NavLink } from 'react-router-dom';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <NavLink
          to="/guidelines"
          className="footer__link link"
          activeClassName="link--active"
        >
          guidelines
        </NavLink>
        <NavLink
          to="/faq"
          className="footer__link link"
          activeClassName="link--active"
        >
          faq
        </NavLink>
        <a
          href="https://github.com/HackerNews/API"
          className="footer__link link"
        >
          api
        </a>
      </div>
    </footer>
  );
};

export default Footer;

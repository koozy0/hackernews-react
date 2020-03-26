import '../styles/footer.scss';

import { NavLink } from 'react-router-dom';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <NavLink to="/guidelines">guidelines</NavLink>
        <NavLink to="/faq">faq</NavLink>
        <a href="https://github.com/HackerNews/API">api</a>
      </div>
    </footer>
  );
};

export default Footer;

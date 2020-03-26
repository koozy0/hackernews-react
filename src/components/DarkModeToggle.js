import '../styles/dark-mode-toggle.scss';

import React from 'react';
import { connect } from 'react-redux';
import { toggleDarkMode } from '../actions/darkmode';

const DarkModeToggle = ({ toggleDarkMode, darkmode }) => {
  return (
    <>
      <label className="switch">
        <input
          className="switch__input"
          type="checkbox"
          defaultChecked={darkmode}
          onClick={() => toggleDarkMode(darkmode)}
        />
        <span className="switch__slider switch__slider--round"></span>
      </label>
    </>
  );
};

const mapStateToProps = ({ darkmode }) => ({ darkmode });

const mapDispatchToProps = (dispatch) => ({
  toggleDarkMode: (darkmode) => dispatch(toggleDarkMode(darkmode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DarkModeToggle);

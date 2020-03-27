import '../styles/darkModeToggle.scss';

import React from 'react';
import { connect } from 'react-redux';
import { darkModeOn, darkModeOff } from '../actions/darkmode';

const DarkModeToggle = ({ darkModeOn, darkModeOff, darkmode }) => {
  const toggleDarkMode = darkmode ? darkModeOff : darkModeOn;
  const handleToggleDarkMode = () => toggleDarkMode();

  return (
    <>
      <label className="switch">
        <input
          className="switch__input"
          type="checkbox"
          defaultChecked={darkmode}
          onClick={handleToggleDarkMode}
        />
        <span className="switch__slider switch__slider--round"></span>
      </label>
    </>
  );
};

const mapStateToProps = ({ darkmode }) => ({ darkmode });

const mapDispatchToProps = (dispatch) => ({
  darkModeOn: () => dispatch(darkModeOn()),
  darkModeOff: () => dispatch(darkModeOff()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DarkModeToggle);

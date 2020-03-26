import Footer from './Footer';
import Header from './Header';
import React from 'react';
import { connect } from 'react-redux';

const Layout = ({ darkmode, children }) => {
  return (
    <div className={darkmode ? 'layout layout__dark' : 'layout layout__light'}>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ darkmode }) => ({ darkmode });

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

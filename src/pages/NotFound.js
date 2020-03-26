import '../styles/not-found.scss';

import React from 'react';

const NotFound = () => {
  return (
    <>
      <section className="notfound">
        <h1 className="notfound__header">404</h1>
        <p className="notfound__text">
          Sorry, we can't find that page!
          <br />
          It might be an old link or maybe it moved.
        </p>
      </section>
    </>
  );
};

export default NotFound;

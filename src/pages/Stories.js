import React from 'react';
import { connect } from 'react-redux';

const Stories = ({ story }) => {
  return (
    <>
      <section>
        <h1>{story.filter.toUpperCase()} Stories</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          officiis temporibus dicta? Ex earum quibusdam architecto! Amet
          delectus aliquid tempore sint modi voluptatem odio aspernatur, eius,
          enim veritatis ut sed.
        </p>
      </section>
    </>
  );
};

const mapStateToProps = ({ story }) => ({ story });

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Stories);

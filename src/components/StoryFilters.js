import React from 'react';
import filterTypes from '../types/filterTypes';
import '../styles/story.scss';

const StoryFilters = () => {
  return (
    <ul className="filter filter__list">
      {[...Object.values(filterTypes)].map((filter) => (
        <li key={filter}>
          <button>{filter}</button>
        </li>
      ))}
    </ul>
  );
};

export default StoryFilters;

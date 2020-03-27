import React from 'react';

const StoryList = ({ storyIds }) => {
  return (
    <ul>
      {storyIds.map((storyId) => (
        <li key={storyId}>{storyId}</li>
      ))}
    </ul>
  );
};

export default StoryList;

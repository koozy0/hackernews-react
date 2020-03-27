import { STORY } from './type';

export const fetchAllStories = () => ({
  type: STORY.FETCH_ALL,
});

export const fetchAllStoriesSuccess = (stories) => ({
  type: STORY.FETCH_ALL_SUCCESS,
  payload: stories,
});

export const fetchAllStoriesFailure = (err) => ({
  type: STORY.FETCH_ALL_FAILURE,
  payload: err,
});

import { call, put, takeEvery, select } from 'redux-saga/effects';

import { STORY } from '../actions/type';
import {
  fetchAllStoriesSuccess,
  fetchAllStoriesFailure,
} from '../actions/story';
import hackerNewsApiService from '../services/hackerNewsApiService';

const getStoryFilterFromState = (state) => state.story.filter;

function* fetchAllStories() {
  try {
    const filter = yield select(getStoryFilterFromState);
    const stories = yield call(hackerNewsApiService.getAllStories, [filter]);
    yield put(fetchAllStoriesSuccess(stories));
  } catch (err) {
    yield put(fetchAllStoriesFailure(err));
  }
}

function* rootStoryReducer() {
  yield takeEvery(STORY.FETCH_ALL, fetchAllStories);
}

export default rootStoryReducer;

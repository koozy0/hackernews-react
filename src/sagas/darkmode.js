import { takeEvery } from 'redux-saga/effects';

import { DARK_MODE } from '../actions/type';

function* darkModeOn() {
  yield localStorage.setItem('hackernews-darkmode', true);
}

function* darkModeOff() {
  yield localStorage.setItem('hackernews-darkmode', false);
}

function* rootDarkModeSaga() {
  yield takeEvery(DARK_MODE.ON, darkModeOn);
  yield takeEvery(DARK_MODE.OFF, darkModeOff);
}

export default rootDarkModeSaga;

import { combineReducers } from 'redux';
import darkmodeReducer from './darkmode';
import pageReducer from './page';
import storyReducer from './story';

const rootReducer = combineReducers({
  darkmode: darkmodeReducer,
  page: pageReducer,
  story: storyReducer,
});

export default rootReducer;

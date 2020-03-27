import { combineReducers } from 'redux';
import darkmodeReducer from './darkmode';
import pageReducer from './page';
import storyReducer from './story';
import loadingReducer from './loading';

const rootReducer = combineReducers({
  darkmode: darkmodeReducer,
  page: pageReducer,
  story: storyReducer,
  loading: loadingReducer,
});

export default rootReducer;

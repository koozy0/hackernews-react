import { combineReducers } from 'redux';
import darkmodeReducer from './darkmode';
import storyReducer from './story';

const rootReducer = combineReducers({
  darkmode: darkmodeReducer,
  story: storyReducer,
});

export default rootReducer;

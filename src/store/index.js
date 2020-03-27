import { applyMiddleware, compose, createStore } from 'redux';

import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootDarkModeSaga from '../sagas/darkmode';
import rootStorySaga from '../sagas/story';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

sagaMiddleware.run(rootDarkModeSaga);
sagaMiddleware.run(rootStorySaga);

export default store;

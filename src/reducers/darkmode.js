import { DARK_MODE } from '../actions/type';
import { getInitialDarkMode } from '../shared/utils/darkmode';

const initialState = getInitialDarkMode();

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE.ON:
      return true;

    case DARK_MODE.OFF:
      return false;

    default:
      return state;
  }
};

export default reducer;

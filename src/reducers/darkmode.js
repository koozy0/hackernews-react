import { DARK_MODE } from '../actions/type';

const initialState = true;

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

import { PAGE } from '../actions/type';

const initialState = {
  number: 0,
  size: 30,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGE.NEXT:
      return {
        ...state,
        number: state.number + 1,
      };

    case PAGE.PREV:
      return {
        ...state,
        number: Math.max(state.number - 1, 0),
      };

    default:
      return state;
  }
};

export default reducer;

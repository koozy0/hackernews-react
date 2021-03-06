import { STORY } from '../actions/type';
import filterTypes from '../types/filterTypes';

const initialState = {
  allIds: [],
  byId: {},
  filter: filterTypes.top,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORY.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case STORY.FETCH_ALL:
      return {
        ...state,
        allIds: [],
      };

    case STORY.FETCH_ALL_SUCCESS:
      return {
        ...state,
        allIds: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

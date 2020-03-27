import { STORY } from '../actions/type';

const initialState = {
  story: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORY.FETCH_ALL:
      return {
        ...state,
        story: true,
      };

    case STORY.FETCH_ALL_SUCCESS:
      return {
        ...state,
        story: false,
      };

    case STORY.FETCH_ALL_FAILURE:
      return {
        ...state,
        story: false,
      };

    default:
      return state;
  }
};

export default reducer;

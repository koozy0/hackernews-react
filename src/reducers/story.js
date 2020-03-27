import { STORY } from '../actions/type';

const filterTypes = {
  top: 'top',
  new: 'new',
  best: 'best',
  ask: 'ask',
  show: 'show',
  jobs: 'jobs',
};

const initialState = {
  allIds: [],
  byId: {},
  filter: filterTypes.top,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORY.FILTER.TOP:
      return {
        ...state,
        filter: filterTypes.top,
      };

    case STORY.FILTER.NEW:
      return {
        ...state,
        filter: filterTypes.new,
      };

    case STORY.FILTER.BEST:
      return {
        ...state,
        filter: filterTypes.best,
      };

    case STORY.FILTER.ASK:
      return {
        ...state,
        filter: filterTypes.ask,
      };

    case STORY.FILTER.SHOW:
      return {
        ...state,
        filter: filterTypes.SHOW,
      };

    case STORY.FILTER.JOBS:
      return {
        ...state,
        filter: filterTypes.jobs,
      };

    default:
      return state;
  }
};

export default reducer;

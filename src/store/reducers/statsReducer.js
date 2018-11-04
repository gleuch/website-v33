import * as types from '../actions/index';
import defaultState from '../actions/default';

export default function statsReducer(state = defaultState.stats, action) {
  switch (action.type) {
    case types.FETCH_STATS_GITHUB_SUCCEEDED: {
      const { github } = action;
      return { state, ...github };
    }
    default: {
      return state;
    }
  }
}

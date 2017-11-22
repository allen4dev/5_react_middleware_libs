import { FETCH_TRACKS_SUCCESS } from './../actions/tracks';

const INITIAL_STATE = {
  tracks: [],
};

function tracksReducer(state = INITIAL_STATE.tracks, action = {}) {
  switch (action.type) {
    case FETCH_TRACKS_SUCCESS:
      return [...state, ...action.payload];
    default:
      return state;
  }
}

export default tracksReducer;

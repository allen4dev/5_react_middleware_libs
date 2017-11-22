import { FETCH_PLAYLISTS_SUCCESS } from './../actions/playlists';

const INITIAL_STATE = {
  playlists: [],
};

function playlistsReducer(state = INITIAL_STATE.playlists, action = {}) {
  switch (action.type) {
    case FETCH_PLAYLISTS_SUCCESS:
      return [...state, ...action.payload];

    default:
      return state;
  }
}

export default playlistsReducer;

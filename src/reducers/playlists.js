import { combineReducers } from 'redux';

import {
  FETCH_PLAYLISTS_SUCCESS,
  FETCH_PLAYLISTS_REQUEST,
} from './../actions/playlists';

const INITIAL_STATE = {
  entities: [],
  fetching: false,
};

function entitiesReducer(state = INITIAL_STATE.entities, action = {}) {
  switch (action.type) {
    case FETCH_PLAYLISTS_SUCCESS:
      return [...state, ...action.payload.playlists];

    default:
      return state;
  }
}

// function fetchingReducer(state = INITIAL_STATE.fetching, action = {}) {
//   switch (action.type) {
//     case FETCH_PLAYLISTS_REQUEST:
//       return true;

//     case FETCH_PLAYLISTS_SUCCESS:
//       return false;

//     default:
//       return state;
//   }
// }

function fetchingReducer(state = INITIAL_STATE.fetching, action = {}) {
  if (!action.payload || action.payload.filter !== 'playlists') {
    return state;
  }

  switch (action.type) {
    case 'REQUEST_RESOURCE':
      return true;

    case FETCH_PLAYLISTS_SUCCESS:
      return false;

    default:
      return state;
  }
}

const reducer = combineReducers({
  entities: entitiesReducer,
  fetching: fetchingReducer,
});

export default reducer;

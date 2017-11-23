import { combineReducers } from 'redux';

import {
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_REQUEST,
} from './../actions/tracks';

const INITIAL_STATE = {
  entities: [],
  fetching: false,
};

function entitiesReducer(state = INITIAL_STATE.entities, action = {}) {
  switch (action.type) {
    case FETCH_TRACKS_SUCCESS:
      return [...state, ...action.payload.tracks];
    default:
      return state;
  }
}

// function fetchingReducer(state = INITIAL_STATE.fetching, action = {}) {
//   switch (action.type) {
//     case FETCH_TRACKS_REQUEST:
//       return true;

//     case FETCH_TRACKS_SUCCESS:
//       return false;

//     default:
//       return state;
//   }
// }

function fetchingReducer(state = INITIAL_STATE.fetching, action = {}) {
  if (!action.payload || action.payload.filter !== 'tracks') {
    return state;
  }

  switch (action.type) {
    case 'REQUEST_RESOURCE':
      return true;
    case FETCH_TRACKS_SUCCESS:
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

import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';

import { REQUEST_RESOURCE } from './../middlewares/actionTypes';
import { FETCH_PLAYLISTS_SUCCESS } from './../actions/playlists';

const INITIAL_STATE = {
  entities: [],
  fetching: false,
};

const entitiesReducer = handleAction(
  FETCH_PLAYLISTS_SUCCESS,
  (state, action) => [...state, ...action.payload],
  INITIAL_STATE.entities
);

const fetchingReducer = handleActions(
  {
    [REQUEST_RESOURCE]: (state, action) => {
      if (!action.payload || action.payload.filter !== 'playlists') {
        return state;
      }

      return true;
    },
    [FETCH_PLAYLISTS_SUCCESS]: () => false,
  },
  INITIAL_STATE.fetching
);

const reducer = combineReducers({
  entities: entitiesReducer,
  fetching: fetchingReducer,
});

export default reducer;

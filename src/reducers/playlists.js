import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';

import { REQUEST_RESOURCE } from './../middlewares/actionTypes';
import { FETCH_PLAYLISTS_SUCCESS } from './../actions/playlists';

const INITIAL_STATE = {
  entities: {},
  byIds: [],
  fetching: false,
};

const entitiesReducer = handleAction(
  FETCH_PLAYLISTS_SUCCESS,
  (state, action) => ({ ...state, ...action.payload.entities.playlists }),
  INITIAL_STATE.entities
);

const byIdsReducer = handleAction(
  FETCH_PLAYLISTS_SUCCESS,
  (state, action) => [...state, ...action.payload.result],
  INITIAL_STATE.byIds
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
  byIds: byIdsReducer,
  fetching: fetchingReducer,
});

export default reducer;

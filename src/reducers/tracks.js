import { combineReducers } from 'redux';
import { handleAction, handleActions } from 'redux-actions';

import { FETCH_TRACKS_SUCCESS } from './../actions/tracks';
import { REQUEST_RESOURCE } from './../middlewares/actionTypes';

const INITIAL_STATE = {
  entities: [],
  fetching: false,
};

const entitiesReducer = handleAction(
  FETCH_TRACKS_SUCCESS,
  (state, action) => [...state, ...action.payload],
  INITIAL_STATE.entities
);

const fetchingReducer = handleActions(
  {
    [REQUEST_RESOURCE]: (state, action) => {
      if (!action.payload || action.payload.filter !== 'tracks') {
        return state;
      }

      return true;
    },
    [FETCH_TRACKS_SUCCESS]: (state, action) => false,
  },
  INITIAL_STATE.fetching
);

const reducer = combineReducers({
  entities: entitiesReducer,
  fetching: fetchingReducer,
});

export default reducer;

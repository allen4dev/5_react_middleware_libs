import api from './../api';
import { createAction } from 'redux-actions';
import { API } from './../middlewares/actionTypes';

// action types
export const FETCH_PLAYLISTS_SUCCESS = 'FETCH_PLAYLISTS_SUCCESS';

// action creators
export const setPlaylists = createAction(FETCH_PLAYLISTS_SUCCESS);

export const searchPlaylists = createAction(
  API,
  () => ({ success: setPlaylists, filter: 'playlists' }),
  term => ({ apiEndpoint: () => api.playlists.searchPlaylist(term) })
);

import api from './../api';
import { API } from './../middlewares/actionTypes';

// action types
export const FETCH_PLAYLISTS_SUCCESS = 'FETCH_PLAYLISTS_SUCCESS';

// action creators
export function setPlaylists(playlists, filter) {
  return {
    type: FETCH_PLAYLISTS_SUCCESS,
    payload: { playlists, filter },
  };
}

export function searchPlaylists(term) {
  return {
    type: API,
    payload: {
      success: setPlaylists,
      filter: 'playlists',
    },
    meta: {
      apiEndpoint: () => api.playlists.searchPlaylist(term),
    },
  };
}

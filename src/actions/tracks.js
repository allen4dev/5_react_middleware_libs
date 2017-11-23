import api from './../api';

import { API } from './../middlewares/actionTypes';

// action types
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';

// action creators
export function setTracks(tracks, filter) {
  return {
    type: FETCH_TRACKS_SUCCESS,
    payload: { tracks, filter },
  };
}

export function searchTracks(term) {
  return {
    type: API,
    payload: {
      success: setTracks,
      filter: 'tracks',
    },
    meta: {
      apiEndpoint: () => api.tracks.searchTracks(term),
    },
  };
}

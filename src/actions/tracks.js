import { createAction } from 'redux-actions';

import { normalizeTrackList } from '../schemas/tracks';

import api from './../api';
import { API } from './../middlewares/actionTypes';

// action types
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';

export const setTracks = createAction(FETCH_TRACKS_SUCCESS);

export const searchTracks = createAction(
  API,
  () => ({ success: setTracks, filter: 'tracks' }),
  term => ({
    apiEndpoint: () => api.tracks.searchTracks(term),
    normalize: normalizeTrackList,
  })
);

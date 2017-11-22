import api from './../api';

// action types
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';

// action creators
export function setTracks(tracks) {
  return {
    type: FETCH_TRACKS_SUCCESS,
    payload: tracks,
  };
}

// async actions
export function searchTracks(term) {
  return async dispatch => {
    const results = await api.tracks.searchTracks(term);

    dispatch(setTracks(results));

    return results;
  };
}

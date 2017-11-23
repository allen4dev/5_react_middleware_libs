import api from './../api';

// action types
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_REQUEST = 'FETCH_TRACKS_REQUEST';

// action creators
export function setTracks(tracks) {
  return {
    type: FETCH_TRACKS_SUCCESS,
    payload: { tracks, filter: 'tracks' },
  };
}

export function requestTracks() {
  return {
    type: FETCH_TRACKS_REQUEST,
  };
}

// async actions
// export function searchTracks(term) {
//   return async dispatch => {
//     dispatch(requestTracks());

//     const results = await api.tracks.searchTracks(term);

//     dispatch(setTracks(results));

//     return results;
//   };
// }

export function searchTracks(term) {
  return {
    type: 'API',
    payload: {
      success: setTracks,
      filter: 'tracks',
    },
    meta: {
      apiEndpoint: () => api.tracks.searchTracks(term),
    },
  };
}

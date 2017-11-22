// action types
const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';

// action creators
export function setTracks(tracks) {
  return {
    type: FETCH_TRACKS_SUCCESS,
    payload: tracks,
  };
}

// async actions

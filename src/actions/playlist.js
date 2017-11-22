// action types
const FETCH_PLAYLISTS_SUCCESS = 'FETCH_PLAYLISTS_SUCCESS';

// action creators
export function setPlaylist(playlists) {
  return {
    type: FETCH_PLAYLISTS_SUCCESS,
    payload: playlists,
  };
}

// async actions

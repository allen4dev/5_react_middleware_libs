import api from './../api';

// action types
export const FETCH_PLAYLISTS_SUCCESS = 'FETCH_PLAYLISTS_SUCCESS';

// action creators
export function setPlaylists(playlists) {
  return {
    type: FETCH_PLAYLISTS_SUCCESS,
    payload: playlists,
  };
}

// async actions
export function searchPlaylists(term) {
  return async dispatch => {
    const playlists = await api.playlists.searchPlaylist(term);

    dispatch(setPlaylists(playlists));

    return playlists;
  };
}

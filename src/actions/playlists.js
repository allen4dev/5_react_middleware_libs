import api from './../api';

// action types
export const FETCH_PLAYLISTS_REQUEST = 'FETCH_PLAYLISTS_REQUEST';
export const FETCH_PLAYLISTS_SUCCESS = 'FETCH_PLAYLISTS_SUCCESS';

// action creators
export function setPlaylists(playlists) {
  return {
    type: FETCH_PLAYLISTS_SUCCESS,
    payload: playlists,
  };
}

export function requestPlaylists() {
  return {
    type: FETCH_PLAYLISTS_REQUEST,
  };
}

// async actions
export function searchPlaylists(term) {
  return async dispatch => {
    dispatch(requestPlaylists());

    const playlists = await api.playlists.searchPlaylist(term);

    dispatch(setPlaylists(playlists));

    return playlists;
  };
}

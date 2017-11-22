import { combineReducers } from 'redux';

import tracksReducer from './reducers/tracks';
import playlistsReducer from './reducers/playlists';

const rootReducer = combineReducers({
  tracks: tracksReducer,
  playlists: playlistsReducer,
});

export default rootReducer;

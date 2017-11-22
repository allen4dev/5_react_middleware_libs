const API_KEY = process.env.REACT_APP_SC_CLIENT_ID;
const baseURL = 'https://api.soundcloud.com';

const api = {
  tracks: {
    async searchTracks(term) {
      const url = `${baseURL}/tracks?q=${term}&limit=10`;
      const response = await fetch(url);
      const results = await response.json();

      return results;
    },
  },
  playlists: {
    async searchPlaylist(term) {
      const url = `${baseURL}/playlists?q=${term}&limit=10`;
      const response = await fetch(url);
      const results = await response.json();

      return results;
    },
  },
};

export default api;

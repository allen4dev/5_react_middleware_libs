const CLIENT_ID = process.env.REACT_APP_SC_CLIENT_ID;
const baseURL = 'https://api.soundcloud.com';

console.log(CLIENT_ID);

const api = {
  tracks: {
    async searchTracks(term) {
      const url = `${baseURL}/tracks?q=${term}&limit=10&client_id=${CLIENT_ID}`;
      const response = await fetch(url);
      const results = await response.json();

      return results;
    },
  },
  playlists: {
    async searchPlaylist(term) {
      const url = `${baseURL}/playlists?q=${term}&limit=10&client_id=${
        CLIENT_ID
      }`;
      const response = await fetch(url);
      const results = await response.json();

      return results;
    },
  },
};

export default api;

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

import store from './store';

import Tracks from './containers/Tracks';
import Playlists from './containers/Playlists';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Route exact path="/" component={Tracks} />
          <Route path="/playlists" component={Playlists} />
        </div>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';

import store from './store';

import Tracks from './containers/Tracks';
import Playlists from './containers/Playlists';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="Header">
            <nav className="Navigation">
              <NavLink
                exact
                to="/"
                activeStyle={{ color: 'red' }}
                className="Navigation-link">
                Tracks
              </NavLink>
              <NavLink
                to="/playlists"
                activeStyle={{ color: 'red' }}
                className="Navigation-link">
                Playlists
              </NavLink>
            </nav>
          </header>
          <div className="Pages">
            <Route exact path="/" component={Tracks} />
            <Route path="/playlists" component={Playlists} />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

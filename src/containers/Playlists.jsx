import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as playlists from './../actions/playlists';

export class Playlists extends Component {
  async componentDidMount() {
    const { items, fetching, searchPlaylists } = this.props;

    if (items.length === 0 && !fetching) {
      await searchPlaylists('anime');
    }
  }

  render() {
    return (
      <div className="Playlists">
        <ul className="List">
          {this.props.items.map(playlist => (
            <li key={playlist.id} className="Playlist">
              <h4 className="Playlist-title">{playlist.title}</h4>
            </li>
          ))}
        </ul>
        {this.props.fetching && <h1>Loading...</h1>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.playlists.entities,
    fetching: state.playlists.fetching,
  };
}

export default connect(mapStateToProps, {
  searchPlaylists: playlists.searchPlaylists,
})(Playlists);

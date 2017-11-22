import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as playlists from './../actions/playlists';

export class Playlists extends Component {
  async componentDidMount() {
    const { items, searchPlaylists } = this.props;

    if (items.length === 0) {
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.playlists,
  };
}

export default connect(mapStateToProps, {
  searchPlaylists: playlists.searchPlaylists,
})(Playlists);

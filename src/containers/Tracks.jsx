import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as tracks from './../actions/tracks';

export class Tracks extends Component {
  async componentDidMount() {
    const { items, searchTracks } = this.props;

    if (items.length === 0) {
      await searchTracks('anime');
    }
  }

  render() {
    return (
      <div className="Tracks">
        <ul className="List">
          {this.props.items.map(track => (
            <li key={track.id} className="Track">
              <h4 className="Track-title">{track.title}</h4>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.tracks,
  };
}

export default connect(mapStateToProps, {
  searchTracks: tracks.searchTracks,
})(Tracks);

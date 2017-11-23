import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as tracks from './../actions/tracks';

export class Tracks extends Component {
  async componentDidMount() {
    const { items, fetching, searchTracks } = this.props;

    if (items.length === 0 && !fetching) {
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
        {this.props.fetching && <h1>Loading...</h1>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.tracks.entities,
    fetching: state.tracks.fetching,
  };
}

export default connect(mapStateToProps, {
  searchTracks: tracks.searchTracks,
})(Tracks);

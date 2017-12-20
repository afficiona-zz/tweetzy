import React, { Component } from 'react';

/**
 * Loader component
 */
class Loader extends Component {
  render() {
    return (
      <div className="spinner">
        <div className="bounce bounce1" />
        <div className="bounce bounce2" />
        <div className="bounce bounce3" />
      </div>
    );
  }
}

export default Loader;

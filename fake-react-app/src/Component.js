import React from 'react';
import mineIsBigger from 'mine-is-bigger';

export default class Component extends React.Component {
  state = {
    biggestZIndex: 0
  }

  componentDidMount() {
    this.setState({
      biggestZIndex: mineIsBigger()
    })
  }

  render() {
    return (
      <div>
        <div style={{zIndex: this.state.biggestZIndex}}>
          This is a fake app to test importing the bundle and detecting z-indexes and stuff
        </div>
        <div className="bigOlZIndex">
          I am extremely important
        </div>
      </div>
    );
  }
} 
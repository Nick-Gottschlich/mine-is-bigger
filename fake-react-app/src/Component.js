import React from 'react';
import mineIsBigger from 'mine-is-bigger';
import './Component.css';

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
        <div className="bigOlZIndex">
        If you or a loved one has been diagnosed with Mesothelioma you may to be entitled to financial compensation
        </div>
        <div 
          style={{zIndex: this.state.biggestZIndex}}
          className="moreImportant"
        >
          I am extremely important
        </div>
      </div>
    );
  }
} 
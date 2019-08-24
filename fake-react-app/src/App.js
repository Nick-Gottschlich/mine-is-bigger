import React from 'react';
import mineIsBigger from 'mine-is-bigger';
import './App.css';

function App() {

  const biggestZIndex = mineIsBigger();

  return (
    <div>
      <div>
      {biggestZIndex}
      </div>
      <div style={{zIndex: 99}}>
        This is a fake app to test importing the bundle and detecting z-indexes and stuff
      </div>
      <div className="bigOlZIndex">
        wus poppin
      </div>
    </div>
  );
}

export default App;

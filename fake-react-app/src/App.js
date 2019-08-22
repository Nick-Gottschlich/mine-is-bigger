import React from 'react';
import mineIsBigger from 'mine-is-bigger';
import './App.css';

function App() {
  return (
    <div>
      <div style={{zIndex: 99}}>
        {mineIsBigger()}
        This is a fake app to test importing the bundle and detecting z-indexes and stuff
      </div>
      <div className="bigOlZIndex">
        wus poppin
      </div>
    </div>
  );
}

export default App;

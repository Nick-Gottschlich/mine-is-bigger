import React from 'react';
import mineIsBigger from 'mine-is-bigger';
import './App.css';

function App() {
  return (
    <div>
      {mineIsBigger()}
      This is a fake app to test importing the bundle and detecting z-indexes and stuff
    </div>
  );
}

export default App;

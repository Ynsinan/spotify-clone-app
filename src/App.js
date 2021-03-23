import React from 'react';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Player from './Components/Player'
import './App.scss';

const App = () => {
  return (
    <div className="outerWrap">
      <div className="App">
        <Navbar />
        <Main />
      </div>
      {/* <div className="musicControls">Music Controls</div> */}
      <Player className="musicControls" />
    </div>

  );
}

export default App;

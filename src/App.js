import React from 'react';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import './App.scss';

const App = () => {
  return (
    <div className="outerWrap">
      <div className="App">
        <Navbar />
        <Main />
      </div>
      <div className="musicControls">Music Controls</div>
    </div>

  );
}

export default App;

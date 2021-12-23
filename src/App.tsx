import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Signup } from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Signup theme={{ background: "red", textColor: "green" }} />
    </div>
  );
}

export default App;

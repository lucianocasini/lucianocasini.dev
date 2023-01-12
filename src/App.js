import React from 'react';
import './assets/styles/general.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

function App() {
  return (
    <div id="main">
      <Welcome />
      <Navbar />
    </div>
  );
}

export default App;

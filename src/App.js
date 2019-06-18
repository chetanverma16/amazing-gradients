import React from 'react';
import './App.css';

import Header from './components/Header';
import GradientList from './components/gradientList';

function App() {
  return (
    <div className="App">
    <div className="App-header">
    <Header></Header>
    <GradientList></GradientList>
    </div>
    </div>
  );
}

export default App;

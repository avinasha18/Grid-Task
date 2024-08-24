import React from 'react';
import './App.css';
import Matrix from './components/Matrix';

function App() {
  return (
    <div className="App">
      <h1 className="text-2xl font-bold text-center my-4">Interactive 3x3 Matrix</h1>
      <Matrix />
    </div>
  );
}

export default App;

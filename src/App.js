import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="app">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;

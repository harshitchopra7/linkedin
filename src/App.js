import React from 'react';
import { useSelector } from "react-redux";
import './App.css';
import { selectUser } from "./features/userSlice";
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';

function App() {

  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Navbar />

      {!user ? 
        <Login /> 
        : (
          <HomePage />
        )
      }
      
    </div>
  );
}

export default App;

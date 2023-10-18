import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import TaskBoard from './components/TaskBoard/TaskBoard';

function App() {
  return (
    <div className="App">

      <div className='navbar'>
        <Navbar />
      </div>

      <div className='board_container'>
        <div className='boards'>
            <TaskBoard />
        </div>
      </div>
      
    </div>
  );
}

export default App;

import React from 'react';
import { Container } from '@material-ui/core';

import './App.css';
import { TaskBench } from './components/TaskBench/TaskBench';
import { Timer } from './components/Timer/Timer';
import { ControlBar } from './components/ControlBar/ControlBar';


function App() {
  return (
    <div>
      <TaskBench />
      <div className="main">
        <Timer />
        <ControlBar />
      </div>
    </div>
  );
}

export default App;

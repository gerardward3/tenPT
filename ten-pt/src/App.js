import React from 'react';
import './App.css';

import { TaskBench } from './components/TaskBench/TaskBench';
import { Timer } from './components/Timer';
import { ControlBar } from './components/ControlBar';

function App() {
  return (
    <div>
      <div>
        <TaskBench />
      </div>
      <div style={{paddingLeft: 100}}>
        <Timer />
        <ControlBar />
      </div>
    </div>
  );
}

export default App;

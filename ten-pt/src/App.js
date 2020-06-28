import React, { useState } from 'react';

import './App.css';
import { TaskBench } from './components/TaskBench/TaskBench';
import { Timer } from './components/Timer/Timer';
import { ControlBar } from './components/ControlBar/ControlBar';


function App() {
  const [startState, setStartState] = useState(false);
  const handleControlEvent = () => {
    setStartState(!startState);
    console.log('hello from this button!')
  }

  return (
    <div>
      <TaskBench />
      <div className="main">
        <Timer />
        <ControlBar startState={handleControlEvent}/>
      </div>
    </div>
  );
}

export default App;

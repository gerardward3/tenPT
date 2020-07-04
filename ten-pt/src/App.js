import React, { useState } from 'react';

import './App.css';
import { TaskBench } from './components/TaskBench/TaskBench';
import { Timer } from './components/Timer/Timer';
import { ControlBar } from './components/ControlBar/ControlBar';


function App() {
  const [startState, setStartState] = useState(false);
  const [pauseState, setPauseState] = useState(false);
  const [resetState, setResetState] = useState(false)

  const handleStart = () => {
    setStartState(true);
    setPauseState(false);
    setResetState(false);
  }

  const handlePause = () => {
    setPauseState(true);
    setStartState(false);
    setResetState(false);
  }

  const handleReset = () => {
    setResetState(true);
    setStartState(false);
    setPauseState(false);
  }

  return (
    <div>
      <TaskBench />
      <div className="main">
        <Timer start={startState} reset={resetState} pause={pauseState}/>
        <ControlBar startState={handleStart} resetState={handleReset} pauseState={handlePause}/>
      </div>
    </div>
  );
}

export default App;

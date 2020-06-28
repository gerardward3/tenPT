import React from 'react'
import { Container } from '@material-ui/core';

import { ControlButton } from './ControlButton/ControlButton';
import './ControlBar.css'
import { useState } from 'react';

export const ControlBar = (props) => {
    const [startState, setStartState] = useState(false);

    const handleReset = () => {
        console.log('hello from the reset button!');
    }

    const handleStart = () => {
        console.log('hello from the start button!');
    }

    const handlePause = () => {
        console.log('hello from the pause button!');
    }
    return (
        <Container className="ControlBar">
            <ControlButton buttonName="RESET" onClick={props.startState}>RESET</ControlButton>
            <ControlButton buttonName="START" onClick={handleStart}>START</ControlButton>
            <ControlButton buttonName="PAUSE" onClick={handlePause}>PAUSE</ControlButton>
        </Container>
    )
}
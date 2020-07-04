import React from 'react'
import { Container } from '@material-ui/core';

import { ControlButton } from './ControlButton/ControlButton';
import './ControlBar.css'

export const ControlBar = (props) => {
    return (
        <Container className="ControlBar">
            <ControlButton buttonName="RESET" onClick={props.resetState}>RESET</ControlButton>
            <ControlButton buttonName="START" onClick={props.startState}>START</ControlButton>
            <ControlButton buttonName="PAUSE" onClick={props.pauseState}>PAUSE</ControlButton>
        </Container>
    )
}
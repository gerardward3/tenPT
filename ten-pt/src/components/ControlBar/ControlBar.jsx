import React from 'react'
import { Container } from '@material-ui/core';

import { ControlButton } from './ControlButton/ControlButton';
import './ControlBar.css'

export const ControlBar = () => {
    return (
        <Container className="ControlBar">
            <ControlButton buttonName="RESET">RESET</ControlButton>
            <ControlButton buttonName="START/PAUSE">RESET</ControlButton>
            <ControlButton buttonName="STOP">RESET</ControlButton>
        </Container>
    )
}
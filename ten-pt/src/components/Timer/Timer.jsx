import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './Timer.css'

export const Timer = () => {
    return (
        <div className="timerBox">
            <div className="timeText">TIME</div>
            <CircularProgress style={{position: "relative"}}size={500} variant="determinate" value="100" />
        </div>
    )
}
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Countdown, {zeroPad} from 'react-countdown';

import './Timer.css'

export const Timer = () => {

    const renderer = ({hours, minutes, seconds}) => {
        return <span>{zeroPad(hours)}h {zeroPad(minutes)}m {zeroPad(seconds)}s</span>
    };

    return (
        <div className="timerBox">
            <div className="timeText">
                <Countdown 
                  date = {Date.now() + 10000} 
                  renderer = {renderer} 
                />
            </div>
            <CircularProgress style={{position: "relative"}}size={500} variant="determinate" value="100" />
        </div>
    )
}
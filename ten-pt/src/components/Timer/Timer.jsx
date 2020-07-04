import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Countdown, { zeroPad } from 'react-countdown';

import './Timer.css'

export const Timer = (props) => {
    const startDate = Date.now() + 10000;
    const [hasBeenReset, setHasBeenReset] = useState(false);
    const [date, setDate] = useState(startDate)

    const renderer = props => {
        return <CoundownTimer {...props} />
    }

    const handleReset = () => {
        setDate(startDate);
    }
    
    const CoundownTimer = ({hours, minutes, seconds, api}) => {
        useEffect(() => {
            if(props.start) {
                api.start();
            }
            if(props.pause && !api.isPaused()) {
                api.pause();
            }
            if(props.reset && !hasBeenReset) { 
                if(!api.isPaused()) {
                    api.pause();
                }
                handleReset();
                setHasBeenReset(true);
            }
        }, [api]);
        return <span>{zeroPad(hours)}h {zeroPad(minutes)}m {zeroPad(seconds)}s</span>
    };

    return (
        <div className="timerBox">
            <div className="timeText">
                <Countdown 
                  date = {date} 
                  renderer = {renderer} 
                  autoStart = {false}
                />
            </div>
            <CircularProgress style={{position: "relative"}}size={500} variant="determinate" value="100" />
        </div>
    )
}
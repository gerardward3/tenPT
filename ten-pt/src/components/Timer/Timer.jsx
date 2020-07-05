import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Countdown, { zeroPad } from 'react-countdown';

import './Timer.css'

export const Timer = (props) => {
    const [hasBeenReset, setHasBeenReset] = useState(false);
    const [date, setDate] = useState(Date.now() + 10000)

    const renderer = props => {
        return <CoundownTimer {...props} />
    }
    
    const CoundownTimer = ({hours, minutes, seconds, api}) => {
        useEffect(() => {
            console.log(api.isPaused());
            if(props.start && api.isPaused()) {
                api.start();
                setHasBeenReset(false);
            }
            if(props.pause && !api.isPaused() && !hasBeenReset) {
                api.pause();
            }
            if(props.reset && !hasBeenReset) { 
                if(!api.isPaused()) {
                    api.pause();
                }
                setDate(Date.now() + 10000);
                console.log(date);
                setHasBeenReset(true);
            }
        }, [api]);
        return <span>{zeroPad(hours)}h {zeroPad(minutes)}m {zeroPad(seconds)}s</span>
    };

    return (
        <div className="timerBox">
            <div className="timeText">
                <Countdown 
                  key = {date}
                  date = {date} 
                  renderer = {renderer} 
                  controlled = {false}
                  autoStart = {false}
                />
            </div>
            <CircularProgress style={{position: "relative"}}size={500} variant="determinate" value="100" />
        </div>
    )
}
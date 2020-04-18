import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Timer = () => {
    return (
        <div>
            <CircularProgress size={500} variant="determinate" value="100" />
        </div>
    )
}
import React from 'react'
import Button from '@material-ui/core/Button';

import './ControlButton.css'

export const ControlButton = (props) => {
    return(
        <Button 
            className="controlButton" 
            variant="contained" 
            color="primary" 
            onClick={props.onClick}
            >{props.buttonName} 
        </Button>
    )
}
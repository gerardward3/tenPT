import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Drawer from '@material-ui/core/Drawer';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StopIcon from '@material-ui/icons/Stop';
import { findByLabelText } from '@testing-library/react';
import { SketchPicker } from 'react-color'

export const TaskBench = () => {
    const [open, setOpen] = useState(false);
    const [colourPickerOpen, setColourPickerOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleColourPickerClick = () => {
        setColourPickerOpen(!colourPickerOpen);
    }

    return (
        <div>
            <Drawer variant="permanent">
                <List>
                    {['Item 1', 'Item 2', 'Item 3', 'Item 4'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                <StopIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Button startIcon={<AddIcon />} onClick={handleClickOpen}>Add Task</Button>
            </Drawer>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Task</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="taskName"
                        label="Task Name"
                        fullWidth
                    />
                </DialogContent>
                <DialogContent>
                    <button onClick={handleColourPickerClick} />
                    {colourPickerOpen ? <SketchPicker /> : null}
                </DialogContent>
                
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <DialogContent>
                        <TextField
                            margin="dense"
                            id="hours"
                            label="Hours"
                        />
                    </DialogContent>
                    <DialogContent>
                        <TextField
                            margin="dense"
                            id="minutes"
                            label="Minutes"
                        />
                    </DialogContent>
                    <DialogContent>
                        <TextField
                            margin="dense"
                            id="seconds"
                            label="Seconds"
                        />
                    </DialogContent>
                </div>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
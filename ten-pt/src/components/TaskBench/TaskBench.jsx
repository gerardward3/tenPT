import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Drawer from '@material-ui/core/Drawer';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StopIcon from '@material-ui/icons/Stop';
import { CirclePicker } from 'react-color'

export const TaskBench = () => {
    const defaultColour = '#2196f3';
    const [taskList, setTaskList] = useState([{name:'tasktest', colour:'#123456'}]);
    const [taskColour, setTaskColour] = useState(defaultColour)
    const [open, setOpen] = useState(false);
    const [colourPickerOpen, setColourPickerOpen] = useState(false);
    const [taskName, setTaskName] = useState('Task');

    const handleClickOpen = () => {
        console.log(taskList);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCreateTask = () => {
        setOpen(false);
        setTaskList(taskList.concat([{name: taskName, colour:taskColour}]));
    }

    const handleColourPickerClick = () => {
        setColourPickerOpen(!colourPickerOpen);
    }

    const handleChangeComplete = (color) => {
        setTaskColour(color.hex);
      };

    const handleTaskNameChange = (event) => {
        setTaskName(event.target.value);
    }
    return (
        <div>
            <Drawer variant="permanent">
                <List>
                    {taskList.map((index) => (
                        <ListItem button key={index.name}>
                            <ListItemIcon style={{color:index.colour}}>
                                <StopIcon />
                            </ListItemIcon>
                            <ListItemText primary={index.name} />
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
                        onChange={ handleTaskNameChange }
                    />
                </DialogContent>
                <DialogContent>
                    <button style={{height:'20px', backgroundColor:taskColour}} onClick={handleColourPickerClick} />
                    {colourPickerOpen ? <CirclePicker 
                        color={ taskColour }
                        onChangeComplete={ handleChangeComplete }/> 
                    : null}
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
                    <Button onClick={handleCreateTask} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
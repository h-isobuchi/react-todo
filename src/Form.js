import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'block',
        paddingTop: 70,
        todoForm: {
            display: 'inline',
            width: 200,
        },
        addButton: {
            display: 'inline',
        },
    },
}));

function Form(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <TextField label="enter todo" className={classes.root.todoForm} value={props.formValue} onChange={props.handleChange} />
                <button className={classes.root.addButton} onClick={props.handleAddClick}>Add</button>
            </div>
        </React.Fragment>
    )
}

export default Form;
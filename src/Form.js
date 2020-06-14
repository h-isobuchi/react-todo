import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'block',
        position: 'absolute',
        top: 70,
        left: 30,
        todoForm: {
            display: 'inline',
            maxWidth: 360,
        },
    },
}));

function Form(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <TextField 
                    label="What needs to be done?"
                    className={classes.root.todoForm}
                    value={props.formValue}
                    onChange={props.handleChange}
                    onKeyDown={e => {
                        if(e.keyCode === 13){
                            props.handleOnEnterKeyDown()
                        }
                    }}
                />
            </div>
        </React.Fragment>
    )
}

export default Form;
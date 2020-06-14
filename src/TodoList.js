import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import './TodoList.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

function TodoList(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {props.todos.map(
        (todolist, i) => {
          const labelId = `checkbox-list-label-${i}`;

          return (
            <ListItem key={i} role={undefined} dense button>
              <ListItemIcon>
                <GreenCheckbox 
                  checked={todolist.completed}
                  onChange={() => props.handleCheckChange(i)}
                  name="checkedG" 
                />
                </ListItemIcon>
                <ListItemText id={labelId} className={todolist.completed ? "text-line-through" : "plain-text"} primary={todolist.todo}/>                      
                <ListItemSecondaryAction>
                  <IconButton aria-label="delete" onClick={() => props.handleDeleteClick(i)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              )
            })}
    </List>
  );
}

export default TodoList;
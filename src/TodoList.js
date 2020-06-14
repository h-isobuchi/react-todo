import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './TodoList.css'

const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

class TodoList extends React.Component {
    render() {
        return (
            <ul>
               {this.props.todos.map(
                   (todolist, i) => <li key={i}>
                       <FormControlLabel
                            control={<GreenCheckbox checked={todolist.completed} onChange={() => this.props.handleCheckChange(i)} name="checkedG" />}
                        />
                        <span className={todolist.completed ? "text-line-through" : "plain-text"}>{todolist.todo}</span>
                        <IconButton aria-label="delete" onClick={() => this.props.handleDeleteClick(i)}>
                          <DeleteIcon />
                        </IconButton>
                   </li>
               )}
            </ul>
        );
    }
}

export default TodoList;
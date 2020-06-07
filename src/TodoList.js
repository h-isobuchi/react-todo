import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
                   (todo, i) => <li key={i}>
                       <FormControlLabel
                            control={<GreenCheckbox checked={this.props.todos[i].completed} onChange={() => this.props.handleCheckChange(i)} name="checkedG" />}
                        />
                        <span className={this.props.todos[i].completed ? "text-line-through" : "plain-text"}>{this.props.todos[i].todo}</span>
                        <Button variant="contained" color="primary" onClick={() => this.props.handleDeleteClick(i)}>Delete</Button>
                   </li>
               )}
            </ul>
        );
    }
}

export default TodoList;
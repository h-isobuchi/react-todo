import React from 'react';
import Button from '@material-ui/core/Button';

class TodoList extends React.Component {
    render() {
        return (
            <ul>
               {this.props.todos.map(
                   (todo, i) => <li key={i}><input type="checkbox" />{todo}<Button variant="contained" color="primary" onClick={() => this.props.handleDeleteClick(i)}>Delete</Button>
                   </li>
               )}
            </ul>
        );
    }
}

export default TodoList;
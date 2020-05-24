import React from 'react'

class TodoList extends React.Component {
    render() {
        return (
            <ul>
               {this.props.todos.map(
                   (todo, i) => <li key={i}><input type="checkbox" />{todo}<button onClick={() => this.props.handleDeleteClick(i)}>Delete</button>
                   </li>
               )}
            </ul>
        );
    }
}

export default TodoList;
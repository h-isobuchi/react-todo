import React from 'react'

class TodoList extends React.Component {
    render() {
        return (
            <ul>
               {this.props.todos.map(
                   (todo) => <li>{todo}</li>
               )}
            </ul>
        );
    }
}

export default TodoList;
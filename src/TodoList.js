import React from 'react'

class TodoList extends React.Component {
    render() {
        return (
            <ul>
               {this.props.todos.map(
                   (todo) => <li><input type="checkbox" />{todo}<input type="submit" value="Delete" /></li>
               )}
            </ul>
        );
    }
}

export default TodoList;
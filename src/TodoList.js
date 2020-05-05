import React from 'react'

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                <li>Item 1 <input type="submit" value="delete" /></li>
                <li>Item 2 <input type="submit" value="delete" /></li>
                <li>Item 3 <input type="submit" value="delete" /></li>
            </ul>
        );
    }
}

export default TodoList;
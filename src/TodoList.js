import React from 'react'

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                <li><input type="checkbox" /> Item 1 <input type="submit" value="delete" /></li>
                <li><input type="checkbox" /> Item 2 <input type="submit" value="delete" /></li>
                <li><input type="checkbox" /> Item 3 <input type="submit" value="delete" /></li>
            </ul>
        );
    }
}

export default TodoList;
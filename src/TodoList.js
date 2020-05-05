import React from 'react'

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                <li><input type="checkbox" /> Temp 1 <input type="submit" value="delete" /></li>
                <li><input type="checkbox" /> Temp 2 <input type="submit" value="delete" /></li>
                <li><input type="checkbox" /> Temp 3 <input type="submit" value="delete" /></li>
            </ul>
        );
    }
}

export default TodoList;
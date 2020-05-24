import React from 'react';
import Form from './Form';
import TodoList from './TodoList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: '' ,todos: []}
  }

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  handleAddClick = () => {
    const newTodo = this.state.todos.slice()
    newTodo.push(this.state.value)
    this.setState({value: '', todos: newTodo})
  }

  handleDeleteClick = (index) => {
    const newTodo = this.state.todos.slice()
    newTodo.splice(index,1)
    this.setState({todos: newTodo})
  }

  render() {
    return (
      <React.Fragment>
        <h1>Todo App</h1>
        <Form value={this.state.value} handleChange={this.handleChange} handleAddClick={this.handleAddClick} />
        <TodoList todos={this.state.todos} handleDeleteClick={this.handleDeleteClick} /> 
      </React.Fragment>
    );
  }
}

export default App;

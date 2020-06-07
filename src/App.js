import React from 'react';
import Form from './Form';
import TodoList from './TodoList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {formValue: '' ,todos: []}
  }

  handleChange = (event) => {
    this.setState({formValue: event.target.value})
  }

  handleAddClick = () => {
    const newTodo = this.state.todos.slice()
    newTodo.push({todo: this.state.formValue, completed: false})
    this.setState({formValue: '', todos: newTodo})
  }

  handleDeleteClick = (index) => {
    const newTodo = this.state.todos.slice()
    newTodo.splice(index,1)
    this.setState({todos: newTodo})
  }

  handleCheckChange = (index) => {
    const newTodo = this.state.todos.slice()
    newTodo[index].completed = !newTodo[index].completed
    this.setState({todos: newTodo})
  }

  render() {
    return (
      <React.Fragment>
        <h1>Todo App</h1>
        <Form value={this.state.formValue} handleChange={this.handleChange} handleAddClick={this.handleAddClick} />
        <TodoList todos={this.state.todos} handleDeleteClick={this.handleDeleteClick} handleCheckChange={this.handleCheckChange} /> 
      </React.Fragment>
    );
  }
}

export default App;

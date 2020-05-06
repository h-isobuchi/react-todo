import React from 'react';
import Form from './Form';
import TodoList from './TodoList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <React.Fragment>
        <h1>Todo App</h1>
        <Form value={this.value} handleChange={this.handleChange} />
        <TodoList/>
      </React.Fragment>
    );
  }
}

export default App;

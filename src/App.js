import React from 'react';
import Form from './Form';
import TodoList from './TodoList'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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

  useStyles = makeStyles((theme) => ({
    header: {
      display: "block",
    },
  }));

  render() {
    return (
      <React.Fragment>
        <AppBar className="header">
          <Toolbar>
            <Typography variant="h4">Todo App</Typography>
          </Toolbar>
        </AppBar>
        <Form value={this.state.formValue} handleChange={this.handleChange} handleAddClick={this.handleAddClick} />
        <TodoList todos={this.state.todos} handleDeleteClick={this.handleDeleteClick} handleCheckChange={this.handleCheckChange} /> 
      </React.Fragment>
    );
  }
}

export default App;

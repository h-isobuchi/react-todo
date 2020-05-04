import React from 'react';
import Form from './Form';
import TodoList from './TodoList'

function App() {
  return (
    <React.Fragment>
      <h1>Todo App</h1>
      <Form/>
      <TodoList/>
    </React.Fragment>
  );
}

export default App;

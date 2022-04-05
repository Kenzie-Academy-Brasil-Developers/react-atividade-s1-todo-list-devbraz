import './App.css';
import { useState } from 'react';
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([])
  const addTodo = (newTodo) => setTodos([...todos, newTodo])
  const handleTodo = (removeTodo) => {
    const filter = todos.filter((todo) => todo !== removeTodo)
    return setTodos(filter)
  }

  return (

    <div className="App">
      <div className="App-header">
        <Form todos={todos} setTodos={setTodos} addTodo={addTodo} handleTodo={handleTodo}/>
        <TodoList todos={todos} setTodos={setTodos} addTodo={addTodo} handleTodo={handleTodo}/>
      </div>
    </div>

  );

}

export default App;

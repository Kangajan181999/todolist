import React, { useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";



function App() {
  const [todos, setTodo] = useState([]);

  const addTaskHandler = (task) => {
    setTodo((prevTodos) => {
      return [task, ...prevTodos];
    });
  };

  const removeTaskHandler = (id) => {
    setTodo((prevTodos) => {
      return prevTodos.filter((task, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <TodoForm onGetTasks={addTaskHandler} />
      <TodoList todos={todos} onRemove={removeTaskHandler} />
    </div>
  );
}

export default App;

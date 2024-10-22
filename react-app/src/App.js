import React, { useState } from "react";
import { displayTodos } from "./components/displayTodos";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "구름톤 출석하기", completed: true },
    { id: 2, task: "밥 먹기", completed: false },
    { id: 3, task: "모던 리액트 완독하기", completed: false },
  ]);

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          id: todo.id,
          task: todo.task,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>To Do List</h1>
      <ul>{displayTodos(todos, toggleTodo)}</ul>
    </div>
  );
}

export default App;

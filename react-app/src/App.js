import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Todos from "./components/Todos";
import UserInfo from "./components/UserInfo";

function App() {
  const [todos, setTodos] = useState([
    { id: "1", task: "구름톤 출석하기", completed: true },
    { id: "2", task: "밥 먹기", completed: false },
    { id: "3", task: "모던 리액트 완독하기", completed: false },
  ]);

  useEffect(() => {
    console.log("변경된 todos:", todos);
  }, [todos]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const updatedTodos = Array.from(todos);
    const [reorderedItem] = updatedTodos.splice(result.source.index, 1);
    updatedTodos.splice(result.destination.index, 0, reorderedItem);

    setTodos(updatedTodos);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="App">
        <h1 style={{ textAlign: "center" }}>To Do List</h1>
        <Todos todos={todos} toggleTodo={toggleTodo} />
        <UserInfo />
      </div>
    </DragDropContext>
  );
}

export default App;

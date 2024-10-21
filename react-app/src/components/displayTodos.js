import React from "react";

export function displayTodos(todoList) {
  return todoList.map((todo) => (
    <li key={todo.id}>
      {todo.completed ? "✅" : "❌"} {todo.task}
    </li>
  ));
}

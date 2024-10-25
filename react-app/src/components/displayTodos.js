import React from "react";

export function DisplayTodos(todoList, toggleTodo) {
  return todoList.map((todo) => (
    <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
      {todo.completed ? "✅" : "❌"} {todo.task}
    </li>
  ));
}

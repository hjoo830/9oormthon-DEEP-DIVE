import React from "react";

// 컴포넌트 이름을 네이밍 컨벤션에 따라 DisplayTodos로 변경
// git conflict를 위해 같은 파일에 다른 내용(주석) 추가
export function DisplayTodos(todoList, toggleTodo) {
  return todoList.map((todo) => (
    <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
      {todo.completed ? "✅" : "❌"} {todo.task}
    </li>
  ));
}

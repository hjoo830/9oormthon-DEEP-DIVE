import { displayTodos } from "./components/displayTodos";

const todos = [
  { id: 1, task: "구름톤 출석하기", completed: true },
  { id: 2, task: "밥 먹기", completed: false },
  { id: 3, task: "모던 리액트 완독하기", completed: false },
];

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>To Do List</h1>
      <ul>{displayTodos(todos)}</ul>
    </div>
  );
}

export default App;

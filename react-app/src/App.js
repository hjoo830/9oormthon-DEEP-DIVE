import React, { useState, useEffect, useCallback, useMemo } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Todos from "./components/Todos";
import UserInfo from "./components/UserInfo";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Modal from "./components/Modal";
import { fetchTodos } from "./api";

function App() {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const completedCount = useMemo(
    () => todos.filter((todo) => todo.completed).length,
    [todos]
  );

  const progress = useMemo(
    () => (todos.length > 0 ? (completedCount / todos.length) * 100 : 0),
    [completedCount, todos.length]
  );

  useEffect(() => {
    const loadTodos = async () => {
      const fetchedTodos = await fetchTodos();
      setTodos(fetchedTodos);
    };

    loadTodos();
  }, []);

  const handleOnDragEnd = useCallback(
    (result) => {
      if (!result.destination) return;

      const updatedTodos = Array.from(todos);
      const [reorderedItem] = updatedTodos.splice(result.source.index, 1);
      updatedTodos.splice(result.destination.index, 0, reorderedItem);

      setTodos(updatedTodos);
    },
    [todos]
  );

  const toggleTodo = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Navbar />
      <div id="home">
        <Banner />
      </div>
      <div className="App" style={{ paddingTop: "20px", height: "150vh" }}>
        <div id="todos" style={{ paddingTop: "30px" }}>
          <h1 style={{ textAlign: "center" }}>To Do List</h1>
          <p style={{ textAlign: "center" }}>완료한 일: {completedCount}개</p>
          <div style={{ margin: "20px", textAlign: "center" }}>
            <div
              style={{
                width: "100%",
                height: "20px",
                backgroundColor: "#f3f3f3",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  backgroundColor: "#4caf50",
                  transition: "width 0.3s ease-in-out",
                }}
              ></div>
            </div>
            <p>{progress.toFixed(1)}% 완료</p>
          </div>
          <Todos todos={todos} toggleTodo={toggleTodo} />
        </div>
        <div id="user">
          <UserInfo />
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button onClick={openModal} style={{ padding: "10px 20px" }}>
            모달 열기
          </button>
        </div>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>모달 창</h2>
          <p>
            버튼을 누르면 모달 창이 열리고, 우측 상단의 x 버튼을 누르면 모달
            창이 닫힌다.
          </p>
        </Modal>
      </div>
    </DragDropContext>
  );
}

export default App;

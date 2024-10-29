import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

function Todos({ todos, toggleTodo }) {
  return (
    <Droppable droppableId="todos">
      {(provided) => (
        <ul
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={{ listStyleType: "none", padding: "20px" }}
        >
          {todos.map((todo, index) => (
            <Draggable key={todo.id} draggableId={todo.id} index={index}>
              {(provided) => (
                <li
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  onClick={() => toggleTodo(todo.id)}
                  style={{
                    userSelect: "none",
                    padding: "8px",
                    margin: "4px",
                    backgroundColor: "#f3f3f3",
                    borderRadius: "4px",
                    ...provided.draggableProps.style,
                  }}
                >
                  {todo.completed ? "✅" : "❌"} {todo.task}
                </li>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}

export default Todos;

import React from "react";
import { ITodo, useTodoStore } from "./app/todo/store";

function Todo(props: ITodo) {
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const toggleStatus = useTodoStore((state) => state.toggleStatus);
  const deleteTodoHandler = (id: string) => {
    deleteTodo(id);
  };
  const toggleTodoHandler = (id: string) => {
    toggleStatus(id);
  };
  return (
    <div className="todo">
      <input
        type="checkbox"
        name="isCompleted"
        id={`${props.id}-checkbox`}
        checked={props.completed}
        onChange={(e) => toggleTodoHandler(props.id)}
      />
      <p style={{ textDecoration: props.completed ? "line-through" : "none" }}>
        {props.title}
      </p>
      <button onClick={() => deleteTodoHandler(props.id)}>Delete</button>
    </div>
  );
}

export default Todo;

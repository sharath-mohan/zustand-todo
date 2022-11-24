import React from "react";
import { useTodoStore } from "./app/todo/store";
import Todo from "./Todo";

function Todos() {
  const todos = useTodoStore((state) => state.todos);
  return (
    <section>
      {todos.map((el) => (
        <Todo {...el} key={el.id} />
      ))}
    </section>
  );
}

export default Todos;

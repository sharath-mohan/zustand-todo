import React, { useEffect } from "react";

import "./App.css";

import AddTodo from "./AddTodo";
import Todos from "./Todos";
import { useTodoStore } from "./app/todo/store";

function App() {
  const fetchTodos = useTodoStore((state) => state.fetchTodos);
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <main>
      <header>
        <h1>Zustand Todo</h1>
      </header>
      <AddTodo />
      <Todos />
    </main>
  );
}

export default App;

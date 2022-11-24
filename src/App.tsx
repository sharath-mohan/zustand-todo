import React from "react";

import "./App.css";

import AddTodo from "./AddTodo";
import Todos from "./Todos";

function App() {
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

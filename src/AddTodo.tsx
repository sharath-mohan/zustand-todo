import React, { FormEvent, useState } from "react";
import { useTodoStore } from "./app/todo/store";
import { nanoid } from "nanoid";
function AddTodo() {
  const addTodo = useTodoStore((state) => state.addTodo);
  const [todo, setTodo] = useState("");
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log(todo);
    addTodo({
      id: nanoid(),
      title: todo,
      completed: false,
    });
    setTodo("");
  };
  return (
    <section className="add-todo">
      <form onSubmit={(event) => submitHandler(event)}>
        <input
          type="text"
          placeholder="Your task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </section>
  );
}

export default AddTodo;

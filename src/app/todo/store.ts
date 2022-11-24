import create from "zustand";
import { devtools, persist } from "zustand/middleware";
export interface ITodo {
  id: string;
  completed: boolean;
  title: string;
}
interface TodoState {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void;
  deleteTodo: (id: string) => void;
  toggleStatus: (id: string) => void;
  fetchTodos: () => void;
}

export const useTodoStore = create<TodoState>()(
  devtools(
    persist(
      (set) => ({
        todos: [],
        addTodo: (todo) =>
          set((state) => ({ todos: state.todos.concat(todo) })),
        deleteTodo: (id) =>
          set((state) => ({ todos: state.todos.filter((el) => el.id !== id) })),
        toggleStatus: (id) =>
          set((state) => ({
            todos: state.todos.map((el) =>
              el.id === id ? { ...el, completed: !el.completed } : el
            ),
          })),
        fetchTodos: async () => {
          try {
            const response = await fetch(
              "https://jsonplaceholder.typicode.com/users/1/todos"
            );
            if (response.ok) {
              const data: ITodo[] = await response.json();
              set((state) => ({ todos: [...data] }));
            }
          } catch (error) {
            console.log(error);
          }
        },
      }),
      { name: "todos" }
    ),
    { name: "todos", enabled: true }
  )
);

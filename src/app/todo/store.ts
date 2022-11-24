import create from "zustand";
export interface ITodo {
  id: string;
  isCompleted: boolean;
  item: string;
}
interface TodoState {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void;
  deleteTodo: (id: string) => void;
  toggleStatus: (id: string) => void;
}
export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: state.todos.concat(todo) })),
  deleteTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((el) => el.id !== id) })),
  toggleStatus: (id) =>
    set((state) => ({
      todos: state.todos.map((el) =>
        el.id === id ? { ...el, isCompleted: !el.isCompleted } : el
      ),
    })),
}));
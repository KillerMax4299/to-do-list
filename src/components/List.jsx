import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],
      completed: [],
      addTodo: (todo) =>
        set((state) => ({
          todos: [...state.todos, todo].sort((a, b) => a.id - b.id),
        })),
      removeTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      updateTodo: (id, todo) => 
        set((state) => ({
          todos: [
            ...state.todos.filter(elem => elem.id != id),
            todo
          ].sort((a, b) => a.id - b.id)
        })),
      addComp: (id) =>
        set((state) => ({
          completed: [
            ...state.completed,
            ...state.todos.filter((todo) => todo.id == id),
          ].sort((a, b) => a.id - b.id),
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      removeComp: (id) =>
        set((state) => ({
          todos: [
            ...state.todos,
            ...state.completed.filter((todo) => todo.id == id),
          ].sort((a, b) => a.id - b.id),
          completed: state.completed.filter((e) => e.id !== id),
        })),
      deleteComp: (id) =>
        set((state) => ({
          completed: state.completed.filter((e) => e.id !== id),
        })),
    }),
    {
      name: "storage",
    }
  )
);

export default useTodoStore;

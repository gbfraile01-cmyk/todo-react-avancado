import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage('todo-react-avancado:todos', []);
  const [filter, setFilter] = useState('all'); // 'all' | 'completed' | 'pending'

  // useCallback mantém a mesma referência das funções entre renderizações,
  // o que permite ao React.memo do TodoItem funcionar de verdade.
  const addTodo = useCallback(
    (text) => {
      const title = text.trim();
      if (!title) return;
      setTodos((prev) => [{ id: crypto.randomUUID(), text: title, completed: false }, ...prev]);
    },
    [setTodos]
  );

  const toggleTodo = useCallback(
    (id) => {
      setTodos((prev) =>
        prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
      );
    },
    [setTodos]
  );

  const removeTodo = useCallback(
    (id) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    },
    [setTodos]
  );

  // useMemo evita recriar o objeto do contexto (e re-renderizar todos os
  // consumidores) quando nada mudou.
  const value = useMemo(
    () => ({ todos, filter, setFilter, addTodo, toggleTodo, removeTodo }),
    [todos, filter, addTodo, toggleTodo, removeTodo]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos deve ser usado dentro de um <TodoProvider>.');
  }
  return context;
}

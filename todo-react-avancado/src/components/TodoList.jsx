import { useMemo } from 'react';
import { useTodos } from '../context/TodoContext.jsx';
import TodoItem from './TodoItem.jsx';

const EMPTY_MESSAGES = {
  all: 'Nenhuma tarefa ainda. Adicione a primeira acima.',
  pending: 'Nada pendente. Bom trabalho!',
  completed: 'Nenhuma tarefa concluída ainda.',
};

export default function TodoList() {
  const { todos, filter, toggleTodo, removeTodo } = useTodos();

  // useMemo: só refiltra quando a lista ou o filtro mudam.
  const visibleTodos = useMemo(() => {
    if (filter === 'completed') return todos.filter((todo) => todo.completed);
    if (filter === 'pending') return todos.filter((todo) => !todo.completed);
    return todos;
  }, [todos, filter]);

  if (visibleTodos.length === 0) {
    return <p className="empty">{EMPTY_MESSAGES[filter]}</p>;
  }

  return (
    <ul className="list">
      {visibleTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onRemove={removeTodo} />
      ))}
    </ul>
  );
}

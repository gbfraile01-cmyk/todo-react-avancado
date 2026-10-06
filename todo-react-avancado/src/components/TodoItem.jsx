import { memo } from 'react';

// React.memo: o item só renderiza de novo se o próprio `todo` mudar.
// Marcar uma tarefa não re-renderiza as outras.
function TodoItem({ todo, onToggle, onRemove }) {
  // Descomente para validar a memoization no console:
  // console.log('render TodoItem:', todo.text);

  return (
    <li className={`item ${todo.completed ? 'is-done' : ''}`}>
      <label className="item__label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className="item__text">{todo.text}</span>
      </label>
      <button
        type="button"
        className="btn btn--danger"
        onClick={() => onRemove(todo.id)}
        aria-label={`Remover tarefa ${todo.text}`}
      >
        Remover
      </button>
    </li>
  );
}

export default memo(TodoItem);

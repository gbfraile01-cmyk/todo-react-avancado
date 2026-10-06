import { memo } from 'react';
import { useTodos } from '../context/TodoContext.jsx';

const FILTERS = [
  { value: 'all', label: 'Todas' },
  { value: 'pending', label: 'Pendentes' },
  { value: 'completed', label: 'Concluídas' },
];

function TodoFilters() {
  const { filter, setFilter, todos } = useTodos();
  const pending = todos.filter((todo) => !todo.completed).length;

  return (
    <section className="filters" aria-label="Filtros">
      <div className="filters__buttons" role="group">
        {FILTERS.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            className={`btn btn--filter ${filter === value ? 'is-active' : ''}`}
            aria-pressed={filter === value}
            onClick={() => setFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <p className="filters__count">
        {pending} {pending === 1 ? 'pendente' : 'pendentes'}
      </p>
    </section>
  );
}

export default memo(TodoFilters);

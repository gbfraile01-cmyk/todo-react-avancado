import { useInput } from '../hooks/useInput.js';
import { useTodos } from '../context/TodoContext.jsx';

export default function TodoForm() {
  const { addTodo } = useTodos();
  const input = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(input.value);
    input.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="new-todo" className="sr-only">
        Nova tarefa
      </label>
      <input
        id="new-todo"
        className="form__input"
        type="text"
        placeholder="O que precisa ser feito?"
        value={input.value}
        onChange={input.onChange}
        autoComplete="off"
      />
      <button className="btn btn--primary" type="submit" disabled={!input.value.trim()}>
        Adicionar
      </button>
    </form>
  );
}

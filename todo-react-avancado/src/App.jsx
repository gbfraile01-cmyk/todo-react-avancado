import TodoForm from './components/TodoForm.jsx';
import TodoFilters from './components/TodoFilters.jsx';
import TodoList from './components/TodoList.jsx';

export default function App() {
  return (
    <main className="app">
      <header className="app__header">
        <h1>Minhas tarefas</h1>
      </header>
      <TodoForm />
      <TodoFilters />
      <TodoList />
    </main>
  );
}

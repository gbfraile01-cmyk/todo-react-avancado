# todo-react-avancado

Lista de tarefas em React que combina estado local, estado global com Context API, hook customizado e memoization.

## Funcionalidades

- Adicionar, concluir e remover tarefas
- Filtrar por todas, pendentes e concluídas
- Persistência automática no `localStorage`
- Layout Mobile First

## Tecnologias

- React 18
- Vite
- CSS puro (Mobile First)

## Conceitos aplicados

| Conceito | Onde |
| --- | --- |
| `useState` | `TodoContext` (filtro) e `useInput` |
| Context API / `useContext` | `src/context/TodoContext.jsx` (`TodoProvider` e `useTodos`) |
| Hooks customizados | `useLocalStorage` e `useInput` em `src/hooks` |
| `useMemo` | `TodoList` (filtragem) e valor do contexto |
| `React.memo` + `useCallback` | `TodoItem` e `TodoFilters` |

## Estrutura

```
src/
├── components/   TodoForm, TodoFilters, TodoList, TodoItem
├── context/      TodoContext (Provider + hook useTodos)
├── hooks/        useLocalStorage, useInput
├── App.jsx
├── main.jsx
└── styles.css
```

## Como rodar localmente

Pré-requisito: Node.js 18 ou superior.

```bash
git clone https://github.com/SEU-USUARIO/todo-react-avancado.git
cd todo-react-avancado
npm install
npm run dev
```

Abra o endereço exibido no terminal (normalmente http://localhost:5173).

Para gerar a versão de produção: `npm run build`.

## Validando a memoization

Em `src/components/TodoItem.jsx`, descomente o `console.log`. Ao marcar uma tarefa, apenas o item alterado aparece no console. Também dá para conferir na aba Profiler do React Developer Tools.

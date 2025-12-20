import { Link } from "react-router-dom";
import {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
} from "../../services/pokemon";
import { useState } from "react";

export default function App() {
  const { data: todos, isLoading, error } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const [name, setName] = useState("");

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error</h2>;

  return (
    <div>
      <h1>RTK Query + json-server</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New todo"
      />
      <button
        onClick={() => {
          addTodo({ name, completed: false });
          setName("");
        }}
      >
        Add
      </button>

      <ul>
        {todos.data.map((t) => (
          <li key={t.id}>
            {t.name}
            <button onClick={() => deleteTodo(t.id)}>❌</button>
            <Link to={`/aboutById/${t.id}`}>Info</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
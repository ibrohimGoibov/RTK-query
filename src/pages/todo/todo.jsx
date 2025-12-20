import { Link } from "react-router-dom";
import { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation} from "../../services/pokemon1";
import { useState } from "react";

export default function Todo() {
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
      <input type="text" placeholder="description"  onChange={(e) => setAge(e.target.value)}/>
      <input type="file" />
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
            <Link to={`/todoById/${t.id}`}>Info</Link>
            {t.images.map((e) => {
                return (
                    <div>
                        <img src={`http://37.27.29.18:8001/images/${e.imageName}`} width={300} alt="" />
                    </div>
                )
            })}
          </li>
        ))}
      </ul>
    </div>
  );
}
import React, { useState } from "react";

function useTodos() {
  const [todos, setTodos] = useState({});
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => setTodos(json));
  return { todos };
}
function FetchApi() {
  const { todos } = useTodos();

  return (
    <>
      <h2>Todos</h2>
      {Object.entries(todos).length === 0 ? (
        <p>waiting...</p>
      ) : (
        <p>{todos.title}</p>
      )}
    </>
  );
}

export default FetchApi;

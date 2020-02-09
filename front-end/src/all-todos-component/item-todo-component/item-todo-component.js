import React from "react";
import { Link } from "react-router-dom";

const deleteData = props => {
  const id = props.data._id;
  fetch("http://localhost:3333/tasks/delete/" + id, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  });
};
const ItemTodoComponent = props => {
  const data = props.data;
  return (
    <div>
      <Link
        to={{
          pathname: "/todo-detail/",
          state: {
            data: data
          }
        }}
      >
        <h1>{data.title}</h1>
        <p>{data.instruction}</p>
      </Link>
      <Link
        to={{
          pathname: "/edit",
          state: {
            data: data
          }
        }}
      >
        <button>edit</button>
      </Link>
      <button onClick={() => deleteData(props)}>delete</button>
    </div>
  );
};

export default ItemTodoComponent;

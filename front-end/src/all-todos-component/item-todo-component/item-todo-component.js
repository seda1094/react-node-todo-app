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
  }).then(()=>window.location.reload())
};
const ItemTodoComponent = props => {
  const data = props.data;
  return (
    <div>

        <h1>{data.title}</h1>
        <p>{data.instruction}</p>
      <Link
        to={{
          pathname: "/edit",
          state: {
            data
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

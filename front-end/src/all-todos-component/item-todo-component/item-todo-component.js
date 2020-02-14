import React from "react";

const ItemTodoComponent = props => {
  const data = props.data;
  return (
    <div className="task">
        <h1>{data.title}</h1>
        <p>{data.instruction}</p>
    </div>
  );
};

export default ItemTodoComponent;

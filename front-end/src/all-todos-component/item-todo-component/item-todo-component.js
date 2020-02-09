import React from "react";

const ItemTodoComponent = props => {
    console.log(props.data);
    
  return (
    <div>
      <h1>{props.data.title}</h1>
      <p>{props.data.instruction}</p>
      <button>delete</button>
      <button>edit</button>

    </div>
  );
};

export default ItemTodoComponent
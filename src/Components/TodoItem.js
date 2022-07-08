import React, { useState } from "react";
import "./TodoItem.css";
import Card from "./Card";

const TodoItem = (props) => {
  return (
    <Card className={"Todo-item"}>
      <div className="Todo-item__time">
        <h4>{props.gettodos.time}</h4>
      </div>
      <div className={"Todo-item__title"}>{props.gettodos.title}</div>
      <div className="Todo-item__buttons">
        <button
          className="btn btn-danger"
          onClick={() => {
            props.onRemove(props.index);
          }}
        >
          Delete
        </button>
      </div>
    </Card>
  );
};

export default TodoItem;

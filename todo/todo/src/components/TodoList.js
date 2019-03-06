import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  const todos = props.todos.map((todo, i) => (
    <Todo todo={todo} key={i} index={i} />
  ));
  return <ul>{todos}</ul>;
};
export default TodoList;

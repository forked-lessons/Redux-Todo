import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";
class Todo extends React.Component {
  toggleComplete(e) {
    this.props.toggleComplete(this.props.index);
  }
  render() {
    return (
      <li>
        <input type="checkbox" onChange={() => this.toggleComplete} />
        {this.props.todo.value}
      </li>
    );
  }
}
export default connect(
  null,
  { toggleTodo }
)(Todo);

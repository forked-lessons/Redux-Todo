import React from "react";
import Todo from "./Todo";
import connect from "redux";
import { addTodo, toggleTodo } from "./actions";
class TodoList extends React.Component {
  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };
  toggleTodo = id => {
    this.props.toggleTodo(id);
  };
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <Todo {...todo} onClick={() => this.toggleTodo(todo.id)} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  TodoList: state.todos
});
export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(TodoList);

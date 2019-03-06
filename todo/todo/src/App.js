import React from "react";
import TodoList from "./components/TodoList";
import { connect } from "react-redux";
import { addTodo } from "./actions";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    };
    this.addTodo = this.addTodo.bind(this);
    this.updateNewTodo = this.updateNewTodo.bind(this);
  }
  addTodo(e) {
    e.preventDefault();
    this.props.addTodo({
      value: this.state.newTodo,
      complete: false
    });
    this.setState({ newTodo: "" });
  }
  updateNewTodo(e) {
    this.setState({
      newTodo: e.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.addTodo}>
          <input
            onChange={this.updateNewTodo}
            placeholder="new todo"
            value={this.state.newTodo}
          />
        </form>
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
export default connect(
  mapStateToProps,
  { addTodo }
)(App);

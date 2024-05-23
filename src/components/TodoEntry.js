import React, { Component } from "react";
import todoStore from "../stores/TodoStore";

class TodoEntry extends Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      todoStore.addTodo(this.state.value);
      this.setState({ value: "" });
    }
  };

  render() {
    return (
      <div>
        <header className="header">
          <h1>todos</h1>
          <input
            value={this.state.value}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
          />
        </header>
      </div>
    );
  }
}

export default TodoEntry;

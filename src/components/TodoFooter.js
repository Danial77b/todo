import React, { Component } from "react";
import todoStore from "../stores/TodoStore";

class TodoFooter extends Component {
  clearCompleted = () => {
    todoStore.clearCompleted();
  };

  setFilter = (filter) => {
    todoStore.setFilter(filter);
  };

  render() {
    return (
      <footer class="footer">
        <span class="todo-count">
          <strong>{todoStore.getTodoCount()}</strong> item left
        </span>
        <ul class="filters">
          <li>
            <a class={todoStore.filter === "All" ? "selected" : ""} href="#/" onClick={() => this.setFilter("All")}>
              All
            </a>
          </li>
          <li>
            <a class={todoStore.filter === "Active" ? "selected" : ""} href="#/active" onClick={() => this.setFilter("Active")}>
              Active
            </a>
          </li>
          <li>
            <a class={todoStore.filter === "Completed" ? "selected" : ""} href="#/completed" onClick={() => this.setFilter("Completed")}>
              Completed
            </a>
          </li>
        </ul>
        <button class="clear-completed" onClick={this.clearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}

export default TodoFooter;

import React, { Component } from "react";
import TodoItem from "./TodoItem";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
class TodoItems extends Component {
  render() {
    const filteredTodos = todoStore.todos.filter(
      (todo) =>
        todoStore.filter === "All" ||
        (todoStore.filter === "Active" && !todo.completed) ||
        (todoStore.filter === "Completed" && todo.completed)
    );

    return (
      <div>
        <section class="main">
          <ul class="todo-list">
            {filteredTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default TodoItems;

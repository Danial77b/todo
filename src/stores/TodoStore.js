import { observable, action } from "mobx";
import TodoModel from "./TodoModel";

class TodoStore {
  @observable todos = [];
  lastID = 0;
  @observable filter = "All";

  @action
  addTodo(title) {
    this.todos.push(new TodoModel(this, title, false, this.lastID++));
    this.saveTodos();
  }

  @action
  getTodoCount() {
    return this.todos.filter((todo) => !todo.completed).length;
  }

  @action
  loadTodos = () => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos).map(
        (data) => new TodoModel(this, data.title, data.completed, data.id)
      );
    }
  };

  @action
  saveTodos = () => {
    localStorage.setItem(
      "todos",
      JSON.stringify(
        this.todos.map((todo) => ({
          title: todo.title,
          completed: todo.completed,
          id: todo.id,
        }))
      )
    );
  };

  @action
  clearCompleted = () => {
    for (let i = this.todos.length - 1; i >= 0; i--) {
      if (this.todos[i].completed) {
        this.todos[i].destroy();
      }
    }
  };

  @action
  setFilter = (filter) => {
    this.filter = filter;
  };

  @action
  updateTodo = (todo) => {
    const todoIndex = this.todos.findIndex((item) => item.id === todo.id);
    if (todoIndex !== -1) {
      this.todos[todoIndex] = todo;
      this.saveTodos();
    }
  };
}

const todoStore = new TodoStore();
todoStore.loadTodos();
export default todoStore;

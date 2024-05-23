import { observable, action } from "mobx";

export default class TodoModel {
  @observable title;
  @observable completed;
  @observable id;

  constructor(store, title, completed, id) {
    this.title = title;
    this.completed = completed;
    this.id = id;
    this.store = store;
  }

  @action
  toggle() {
    this.completed = !this.completed;
    this.store.updateTodo(this);
  }

  @action
  destroy = () => {
    this.store.todos.remove(this);
    this.store.saveTodos();
  };
}

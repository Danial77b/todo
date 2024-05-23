import React, { Component } from "react";
import { observer } from "mobx-react";
import { action } from "mobx";

@observer
class TodoItem extends Component {
  render() {
    const { todo } = this.props;
    return (
      <div>
        <li class={todo.completed ? "completed" : " "}>
          <div class="view">
            <input
              onChange={this.onToggle}
              class="toggle"
              type="checkbox"
              checked={todo.completed}
            />
            <label>{todo.title}</label>
            <button className="destroy" onClick={this.handleDestroy} />{" "}
          </div>
          <input class="edit" value="Create a TodoMVC template" />
        </li>
      </div>
    );
  }

  @action
  handleSubmit = (event) => {
    const val = this.editText.trim();
    if (val) {
      this.props.todo.setTitle(val);
      this.editText = val;
    } else {
      this.handleDestroy();
    }
    this.props.viewStore.todoBeingEdited = null;
  };

  @action
  onToggle = () => {
    // console.log(this.props.todo);
    this.props.todo.toggle();
  };

  @action
  handleDestroy = () => {
    this.props.todo.destroy();
  };
}

export default TodoItem;

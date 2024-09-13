import { makeAutoObservable } from "mobx";

class Store {
  todos: string[] = [];
  todo: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  addTodo = () => {
    this.todos.push(this.todo);
    this.todo = "";
  };

  deleteTodo = (index: number) => {
    this.todos.splice(index, 1);
  };
}

const store = new Store();

export default store;

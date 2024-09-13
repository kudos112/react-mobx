import { observer } from "mobx-react-lite";
import "./App.css";
import store from "./store";
import TodoView from "./TodoView";

const App = observer(() => {
  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          value={store.todo}
          onChange={(e) => (store.todo = e.target.value)}
          placeholder="Add new task"
        />
        <button onClick={store.addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {store.todos.map((todo, index) => (
          <TodoView key={index} index={index} todo={todo} />
        ))}
      </ul>
    </div>
  );
});

export default App;

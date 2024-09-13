import { observer } from "mobx-react-lite";
import store from "./store";

interface TodoViewProps {
  index: number;
  todo: string;
}

const TodoView = observer(({ index, todo }: TodoViewProps) => {
  return (
    <li key={index}>
      {todo}
      <button onClick={() => store.deleteTodo(index)}>Delete</button>
    </li>
  );
});

export default TodoView;

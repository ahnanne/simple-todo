import { atom } from "recoil";

type Todo = {
  id: number;
  done: boolean;
  text: string;
};

type TodoList = Array<Todo>;

const todoListState = atom<TodoList>({
  key: "TodoList",
  default: [],
});

export default todoListState;

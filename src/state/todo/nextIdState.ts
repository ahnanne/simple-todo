import { selector } from "recoil";
import todoListState from "./atom";

const nextIdState = selector({
  key: "NextId",
  get: ({ get }) => {
    const todoList = get(todoListState);
    return todoList.length;
  },
});

export default nextIdState;

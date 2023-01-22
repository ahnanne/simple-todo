import { selector } from "recoil";
import todoListState from "./atom";

const todoListStats = selector({
  key: "TodoListStats",
  get: ({ get }) => {
    const todoList = get(todoListState);

    const totalNum = todoList.length;
    const totalDoneNum = todoList.filter((todo) => todo.done).length;
    const totalUndoneNum = totalNum - totalDoneNum;

    return {
      totalNum,
      totalDoneNum,
      totalUndoneNum,
    };
  },
});

export default todoListStats;

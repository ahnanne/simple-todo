import * as Styled from "./index.styled";
import { useTodoState } from "@/src/store/TodoContext";

const TodoHead = () => {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  const today = new Date();

  // * Date.toLocaleDateString
  // Converts a date to a string by using the current or specified locale.
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", {
    weekday: "long",
  });

  return (
    <Styled.TodoHeadBlock>
      <h1>{dateString}</h1>
      <p className="day">{dayName}</p>
      <p className="tasks-left">할 일 {undoneTasks.length}개 남음</p>
    </Styled.TodoHeadBlock>
  );
};

export default TodoHead;

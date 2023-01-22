import { useRecoilValue } from "recoil";
import { todoListStats } from "@/src/recoil/todo";

import * as Styled from "./index.styled";

const TodoHead = () => {
  const { totalUndoneNum } = useRecoilValue(todoListStats);

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
      <p className="tasks-left">할 일 {totalUndoneNum}개 남음</p>
    </Styled.TodoHeadBlock>
  );
};

export default TodoHead;

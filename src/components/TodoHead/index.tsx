import { useRecoilValue } from "recoil";
import { todoListStatsState } from "@/state/todo";

import * as Styled from "./style";

const TodoHead = () => {
  const { totalUndoneNum } = useRecoilValue(todoListStatsState);

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

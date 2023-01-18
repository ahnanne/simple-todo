import * as Styled from "./index.styled";

const TodoHead = () => {
  return (
    <Styled.TodoHeadBlock>
      <h1>2023년 1월 19일</h1>
      <p className="day">일요일</p>
      <p className="tasks-left">할 일 2개 남음</p>
    </Styled.TodoHeadBlock>
  );
};

export default TodoHead;

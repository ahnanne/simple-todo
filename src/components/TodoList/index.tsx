import * as Styled from "./index.styled";
import TodoItem from "@/src/components/TodoItem";

const TodoList = () => {
  return (
    <Styled.TodoListBlock>
      <TodoItem id={1} done={true} text="청소하기" />
      <TodoItem id={2} done={false} text="밥하기" />
    </Styled.TodoListBlock>
  );
};

export default TodoList;

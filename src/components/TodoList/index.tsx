import * as Styled from "./index.styled";
import TodoItem from "@/src/components/TodoItem";

import { useTodoState, useTodoNextId } from "@/src/store/TodoContext";

const TodoList = () => {
  const state = useTodoState();
  const { current: nextId } = useTodoNextId();

  console.log(nextId);

  return (
    <Styled.TodoListBlock>
      <TodoItem id={1} done={true} text="청소하기" />
      <TodoItem id={2} done={false} text="밥하기" />
    </Styled.TodoListBlock>
  );
};

export default TodoList;

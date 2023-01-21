import * as Styled from "./index.styled";
import TodoItem from "@/src/components/TodoItem";

import { useTodoState } from "@/src/store/TodoContext";

const TodoList = () => {
  const todos = useTodoState();

  return (
    <Styled.TodoListBlock>
      {todos.map(({ id, done, text }) => (
        <TodoItem key={id} id={id} done={done} text={text} />
      ))}
    </Styled.TodoListBlock>
  );
};

export default TodoList;

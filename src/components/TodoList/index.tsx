import { useRecoilValue } from "recoil";
import todoListState from "@/src/state/todo";

import * as Styled from "./style";
import TodoItem from "@/src/components/TodoItem";

const TodoList = () => {
  const todos = useRecoilValue(todoListState);

  return (
    <Styled.TodoListBlock>
      {todos.map(({ id, done, text }) => (
        <TodoItem key={id} id={id} done={done} text={text} />
      ))}
    </Styled.TodoListBlock>
  );
};

export default TodoList;

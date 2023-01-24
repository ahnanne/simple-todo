import React from "react";
import { useSetRecoilState } from "recoil";
import todoListState from "@/src/state/todo";

import * as Styled from "./style";
import { FiTrash2, FiSquare, FiCheckSquare } from "react-icons/fi";

type TodoItemProps = {
  id: number;
  done: boolean;
  text: string;
};

const TodoItem = (props: TodoItemProps) => {
  const { id, done, text } = props;

  const setTodoList = useSetRecoilState(todoListState);

  const handleCheckToggle = () => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleRemove = () => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <Styled.TodoItemBlock>
      <Styled.CheckButton type="button" done={done} onClick={handleCheckToggle}>
        {done ? <FiCheckSquare /> : <FiSquare />}
      </Styled.CheckButton>
      <Styled.Text done={done}>{text}</Styled.Text>
      <Styled.RemoveButton type="button" onClick={handleRemove}>
        <FiTrash2 />
      </Styled.RemoveButton>
    </Styled.TodoItemBlock>
  );
};

export default React.memo(TodoItem);

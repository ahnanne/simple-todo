import React from "react";
import * as Styled from "./index.styled";
import { FiTrash2, FiSquare, FiCheckSquare } from "react-icons/fi";
import { useTodoDispatch } from "@/src/store/TodoContext";

type TodoItemProps = {
  id: number;
  done: boolean;
  text: string;
};

const TodoItem = (props: TodoItemProps) => {
  const { id, done, text } = props;

  const dispatch = useTodoDispatch();

  const handleToggle = () =>
    dispatch({
      type: "TOGGLE",
      id,
    });

  const handleRemove = () =>
    dispatch({
      type: "REMOVE",
      id,
    });

  return (
    <Styled.TodoItemBlock>
      <Styled.Check type="button" done={done} onClick={handleToggle}>
        {done ? <FiCheckSquare /> : <FiSquare />}
      </Styled.Check>
      <Styled.Text done={done}>{text}</Styled.Text>
      <Styled.Remove type="button" onClick={handleRemove}>
        <FiTrash2 />
      </Styled.Remove>
    </Styled.TodoItemBlock>
  );
};

export default React.memo(TodoItem);

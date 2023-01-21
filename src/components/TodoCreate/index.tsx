import React, { useState } from "react";

import * as Styled from "./index.styled";
import { FiPlus } from "react-icons/fi";
import { useTodoDispatch, useTodoNextId } from "@/src/store/TodoContext";

const TodoCreate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [todoText, setTodoText] = useState("");

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const handleToggle = () => setIsOpen(!isOpen);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodoText(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: todoText,
        done: false,
      },
    });

    setTodoText("");
    setIsOpen(false);
    nextId.current += 1;
  };

  return (
    <>
      {isOpen && (
        <Styled.InsertFormPositioner>
          <Styled.InsertForm onSubmit={handleSubmit}>
            <Styled.Input
              placeholder="할 일을 입력 후, Enter를 누르세요."
              autoFocus
              onChange={handleChange}
              value={todoText}
            />
          </Styled.InsertForm>
        </Styled.InsertFormPositioner>
      )}
      <Styled.AddButton onClick={handleToggle} isOpen={isOpen}>
        <FiPlus />
      </Styled.AddButton>
    </>
  );
};

export default React.memo(TodoCreate);

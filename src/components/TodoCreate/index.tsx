import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import todoListState, { todoListStatsState } from "@/src/recoil/todo";

import * as Styled from "./index.styled";
import { FiPlus } from "react-icons/fi";

const TodoCreate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [todoText, setTodoText] = useState("");
  const setTodoList = useSetRecoilState(todoListState);
  const { totalNum } = useRecoilValue(todoListStatsState);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodoText(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTodoList((prev) => [
      ...prev,
      {
        id: totalNum,
        text: todoText,
        done: false,
      },
    ]);

    setTodoText("");
    setIsOpen(false);
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

export default TodoCreate;

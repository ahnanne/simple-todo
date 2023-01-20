import { useState } from "react";

import * as Styled from "./index.styled";
import { FiPlus } from "react-icons/fi";

const TodoCreate = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      {isOpen && (
        <Styled.InsertFormPositioner>
          <Styled.InsertForm>
            <Styled.Input
              placeholder="할 일을 입력 후, Enter를 누르세요."
              autoFocus
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

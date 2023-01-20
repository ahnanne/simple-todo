import * as Styled from "./index.styled";
import { FiTrash2, FiCheckSquare } from "react-icons/fi";

type TodoItemProps = {
  id: number;
  done: boolean;
  text: string;
};

const TodoItem = (props: TodoItemProps) => {
  const { id, done, text } = props;

  return (
    <Styled.TodoItemBlock>
      <Styled.CheckCircle done={done}>
        {done && <FiCheckSquare />}
      </Styled.CheckCircle>
      <Styled.Text done={done}>{text}</Styled.Text>
      <Styled.Remove>
        <FiTrash2 />
      </Styled.Remove>
    </Styled.TodoItemBlock>
  );
};

export default TodoItem;

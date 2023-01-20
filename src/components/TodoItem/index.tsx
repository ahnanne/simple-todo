import * as Styled from "./index.styled";
import { FiTrash2, FiSquare, FiCheckSquare } from "react-icons/fi";

type TodoItemProps = {
  id: number;
  done: boolean;
  text: string;
};

const TodoItem = (props: TodoItemProps) => {
  const { id, done, text } = props;

  return (
    <Styled.TodoItemBlock>
      <Styled.Check done={done}>
        {done ? <FiCheckSquare /> : <FiSquare />}
      </Styled.Check>
      <Styled.Text done={done}>{text}</Styled.Text>
      <Styled.Remove>
        <FiTrash2 />
      </Styled.Remove>
    </Styled.TodoItemBlock>
  );
};

export default TodoItem;

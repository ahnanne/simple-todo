import * as Styled from "./index.styled";

type TodoListProps = {
  children: React.ReactNode;
};

const TodoList = (props: TodoListProps) => {
  const { children } = props;

  return <Styled.TodoListBlock>{children}</Styled.TodoListBlock>;
};

export default TodoList;

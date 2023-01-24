import * as Styled from "./style";

type TodoTemplateProps = {
  children: React.ReactNode;
};

const TodoTemplate = (props: TodoTemplateProps) => {
  const { children } = props;

  return <Styled.TodoTemplateBlock>{children}</Styled.TodoTemplateBlock>;
};

export default TodoTemplate;

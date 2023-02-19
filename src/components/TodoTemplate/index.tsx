import { useEffect } from "react";
import { useFetchCats } from "@/hooks/queries/cats";
import * as Styled from "./style";

import ScriptDialog from "../Dialog";

type TodoTemplateProps = {
  children: React.ReactNode;
};

const TodoTemplate = (props: TodoTemplateProps) => {
  const { children } = props;

  const { data: cats, isSuccess } = useFetchCats();

  useEffect(() => {
    if (isSuccess) {
      console.log(cats);
    }
  }, [isSuccess]);

  const preventDefault = (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      console.log(1);
      throw new Error("test");
      // new Error()를 통해 생성한 에러 객체를 throw 키워드를 통해 던진다.
    } catch (e) {
      console.log(2);
    } finally {
      console.log(3);
    }
  };

  return (
    <Styled.TodoTemplateBlock>
      <ScriptDialog
        questionTitle="test"
        script="어쩌고저쩌고"
        isOpen={true}
        handleClose={() => console.log("test")}
      />
      {children}
      <form onClick={preventDefault}>
        <button>Click Me</button>
      </form>
    </Styled.TodoTemplateBlock>
  );
};

export default TodoTemplate;

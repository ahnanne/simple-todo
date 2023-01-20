import GlobalStyles from "./styles/globalStyles";

import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <>
      <GlobalStyles />
      <TodoTemplate>
        <TodoHead />
        <TodoList>
          <TodoItem id={1} done={true} text="청소하기" />
          <TodoItem id={2} done={false} text="밥하기" />
        </TodoList>
      </TodoTemplate>
    </>
  );
}

export default App;

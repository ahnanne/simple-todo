import GlobalStyles from "@/src/styles/globalStyles";

import TodoTemplate from "@/src/components/TodoTemplate";
import TodoHead from "@/src/components/TodoHead";
import TodoList from "@/src/components/TodoList";

function App() {
  return (
    <>
      <GlobalStyles />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;

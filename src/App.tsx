import GlobalStyles from "@/src/styles/globalStyles";

import TodoTemplate from "@/src/components/TodoTemplate";
import TodoHead from "@/src/components/TodoHead";
import TodoList from "@/src/components/TodoList";
import TodoCreate from "@/src/components/TodoCreate";
import { TodoProvider } from "@/src/store/TodoContext";

function App() {
  return (
    <TodoProvider>
      <GlobalStyles />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;

import { RecoilRoot } from "recoil";

import GlobalStyles from "@/src/styles/globalStyles";

import TodoTemplate from "@/src/components/TodoTemplate";
import TodoHead from "@/src/components/TodoHead";
import TodoList from "@/src/components/TodoList";
import TodoCreate from "@/src/components/TodoCreate";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyles />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </RecoilRoot>
  );
}

export default App;

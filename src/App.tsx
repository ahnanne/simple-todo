import { RecoilRoot } from "recoil";

import GlobalStyles from "@/styles/globalStyles";

import TodoTemplate from "@/components/TodoTemplate";
import TodoHead from "@/components/TodoHead";
import TodoList from "@/components/TodoList";
import TodoCreate from "@/components/TodoCreate";

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

import { RecoilRoot } from "recoil";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/apis/queryClient";

import GlobalStyles from "@/styles/globalStyles";

import TodoTemplate from "@/components/TodoTemplate";
import TodoHead from "@/components/TodoHead";
import TodoList from "@/components/TodoList";
import TodoCreate from "@/components/TodoCreate";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyles />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;

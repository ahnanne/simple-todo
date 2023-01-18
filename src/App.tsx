import GlobalStyles from "./styles/globalStyles";

import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";

function App() {
  return (
    <>
      <GlobalStyles />
      <TodoTemplate>
        <TodoHead />
      </TodoTemplate>
    </>
  );
}

export default App;

import {
  useReducer,
  Reducer,
  Dispatch,
  createContext,
  useContext,
  useRef,
  MutableRefObject,
} from "react";

/**
 * Context API를 사용하기 위해 이 파일에서 작업할 내용을 간단히 살펴보자.
 * 1. 상태 타입 정의하기: type State
 * 2. 초기 상태 설정하기: initialTodos
 * 3. 액션 정의하기: type Action
 * 4. 리듀서 구현하기: todoReducer - 내부에서 switch문으로 액션 타입별 분기 처리
 * 5. 상태와 디스패치 각각에 대한 Context 생성하기: createContext() 호출
 * 6. (필요하다면) 추가적인 Context 생성하기: TodoNextIdContext
 * 7. Provider 구현하기: TodoProvider - 내부에서 useReducer 사용
 * 8. 각각의 Context에 대한 커스텀 훅 만들고 export하기: useContext() 호출 + 에러 처리
 *
 * * 참고: https://react.vlpt.us/using-typescript/04-ts-context.html
 */

type Todo = {
  id: number;
  done: boolean;
  text: string;
};

type State = Array<Todo>;

type Action =
  | { type: "CREATE"; todo: Todo }
  | { type: "TOGGLE"; id: number }
  | { type: "REMOVE"; id: number };

const initialTodos: State = [];

const todoReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);

    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );

    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);

    default:
      throw new Error("Unhandled action type");
  }
};

const TodoStateContext = createContext<State | null>(null);
const TodoDispatchContext = createContext<Dispatch<Action> | null>(null);
// 다음에 생성될 Todo의 id 값 관리
const TodoNextIdContext = createContext<MutableRefObject<number> | null>(null);

// createContext를 통해 생성된 Context 내부에는 Provider라는 컴포넌트가 존재한다.
export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  // state, dispatch 각각을 위한 컨텍스트를 만들어 준다. (리렌더링 관련 성능 최적화 + 개발 편의성)
  // (state -> TodoStateContext, dispatch -> TodoDispatchContext)
  const nextId = useRef<number>(state.length);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

const ERROR_MESSAGE = "Cannot find TodoProvider";
export const useTodoState = () => {
  const context = useContext(TodoStateContext);

  if (!context) {
    throw new Error(ERROR_MESSAGE);
  }

  return context;
};
export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);

  if (!context) {
    throw new Error(ERROR_MESSAGE);
  }

  return context;
};
export const useTodoNextId = () => {
  const context = useContext(TodoNextIdContext);

  if (!context) {
    throw new Error(ERROR_MESSAGE);
  }

  return context;
};

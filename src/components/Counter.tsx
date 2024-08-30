import { useReducer } from "react";

enum ActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  RESET = "RESET",
}

type ReducerUpdateAction = {
  type: ActionType.DECREMENT | ActionType.INCREMENT;
  payload: number;
};

type ReducerResetAction = {
  type: ActionType.RESET;
};

// ! Discriminated union type.
// ! The reset type does not need a payload, but the others do.
type ReducerAction = ReducerUpdateAction | ReducerResetAction;

type ReducerState = {
  count: number;
};

const initialState: ReducerState = { count: 0 };

const reducer = (state: ReducerState, action: ReducerAction) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return { count: state.count + action.payload };
    case ActionType.DECREMENT:
      return { count: state.count - action.payload };
    case ActionType.RESET:
      return initialState;
    default:
      return state;
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: ActionType.INCREMENT, payload: 10 })}
      >
        Increment 10
      </button>
      <button
        onClick={() => dispatch({ type: ActionType.DECREMENT, payload: 10 })}
      >
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: ActionType.RESET })}>
        Reset
      </button>
    </>
  );
};

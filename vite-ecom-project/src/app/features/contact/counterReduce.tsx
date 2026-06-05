export type CounterState = {
  data: number;
};

const initialState: CounterState = {
  data: 42,
};

export default function currentReducer(
  state = initialState,
  action: { type: string; payload: number },
) {
  console.log(action.type);
  switch (action.type) {
    case "INC":
      return {
        ...state,
        data: state.data + action.payload,
      };
    case "DEC":
      return {
        ...state,
        data: state.data - action.payload,
      };
    default:
      return state;
  }
}

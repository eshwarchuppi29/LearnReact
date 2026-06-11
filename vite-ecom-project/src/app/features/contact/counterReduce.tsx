import { createSlice } from "@reduxjs/toolkit";

export type CounterState = {
  data: number;
};

const initialState: CounterState = {
  data: 42,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.data += action.payload;
    },
    decrement: (state, action) => {
      state.data -= action.payload;
    },
    reset: (state) => {
      state.data = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

// export default function currentReducer(
//   state = initialState,
//   action: { type: string; payload: number },
// ) {
//   console.log(action.type);
//   switch (action.type) {
//     case "INC":
//       return {
//         ...state,
//         data: state.data + action.payload,
//       };
//     case "DEC":
//       return {
//         ...state,
//         data: state.data - action.payload,
//       };
//     default:
//       return state;
//   }
// }

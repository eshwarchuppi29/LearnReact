import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/contact/counterReduce";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../services/ProductList";

// import currentReducer from "../features/contact/counterReduce";
// export function configureTheStore() {
//     return legacy_createStore(currentReducer);
// }

export const store = configureStore({
  reducer: {
    [productList.reducerPath]: productList.reducer,
    counter: counterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productList.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

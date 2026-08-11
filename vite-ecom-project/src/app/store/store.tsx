import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../features/contact/counterReduce";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../services/ProductList";
import { loadIndicator } from "../layouts/loader";
import { darkTheme } from "../settings/themeSetting";
import { errorResponseApi } from "../services/errorResponse";
import { basketViewRepo } from "../services/basketViewRepo";
import { catalogSlice } from "../features/catalog/CatalogSlice";

// import currentReducer from "../features/contact/counterReduce";
// export function configureTheStore() {
//     return legacy_createStore(currentReducer);
// }

export const store = configureStore({
  reducer: {
    [productList.reducerPath]: productList.reducer,
    [errorResponseApi.reducerPath]: errorResponseApi.reducer,
    [basketViewRepo.reducerPath]: basketViewRepo.reducer,
    counter: counterSlice.reducer,
    uiLoadIndicator: loadIndicator.reducer,
    themeChange: darkTheme.reducer,
    catalog: catalogSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productList.middleware,
      errorResponseApi.middleware,
      basketViewRepo.middleware,
    ),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

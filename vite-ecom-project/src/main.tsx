import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./app/layouts/App.tsx";
// import Users from "./app/features/users/Users.tsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { RouterProvider } from "react-router";
import { router } from "./app/routes/Routes";
import { Provider } from "react-redux";
import { store } from "./app/store/store";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer position="bottom-right" theme="colored"></ToastContainer>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
);

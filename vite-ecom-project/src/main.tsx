import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./app/layouts/App.tsx";
// import Users from "./app/features/users/Users.tsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AllCatalog from "./app/features/catalog/AllCatalog.tsx";
import Navbar from "./app/layouts/Navbar.jsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App />
    <Users /> */}
    <Navbar></Navbar>
    <br></br>
    <AllCatalog></AllCatalog>
  </StrictMode>,
);

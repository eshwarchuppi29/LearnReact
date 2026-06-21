import { createBrowserRouter } from "react-router";
import AllCatalog from "../features/catalog/AllCatalog";
import HomePage from "../features/home/HomePage";
import ProductList from "../features/catalog/ProductList";
import AboutPage from "../features/about/AboutPage";
import ContactPage from "../features/contact/ContactPage";
import ProductDetails from "../features/catalog/ProductDetails";
import ServerErrors from "../features/errors/ServerErrors";
import NotFound from "../features/errors/NotFound";
import BasketView from "../features/basket/BasketView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AllCatalog />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/productlist",
        element: <ProductList />,
      },
      {
        path: "/productlist/:id",
        element: <ProductDetails />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/basket",
        element: <BasketView />,
      },
      {
        path: "/servererror",
        element: <ServerErrors />,
      },
      {
        path: "/notfound",
        element: <NotFound />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

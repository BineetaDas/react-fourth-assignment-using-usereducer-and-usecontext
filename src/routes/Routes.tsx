import { createBrowserRouter } from "react-router-dom";

import UserWrapper from "../layouts/UserWrapper";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Products from "../pages/shopping-cart/Products";
import ShoppingCart from "../pages/shopping-cart/ShoppingCart";
import MultiStepForm from "../pages/multi-step-form/MultiStepForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserWrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "shopping-cart",
        element: <ShoppingCart />,
      },
      {
        path: "multi-step-form",
        element: <MultiStepForm />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;


import { RouterProvider } from "react-router-dom";

import router from "./routes/Routes";

import CartProvider from "./context/cart/CartProvider";
import ProductProvider from "./context/product/ProductProvider";
import FormProvider from "./context/form/FormProvider";

const App = () => (
  <ProductProvider>
    <CartProvider>
      <FormProvider>
        <RouterProvider router={router} />
      </FormProvider>
    </CartProvider>
  </ProductProvider>
);

export default App;
